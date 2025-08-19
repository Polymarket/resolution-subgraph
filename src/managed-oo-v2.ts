import {
  DisputePrice as DisputePriceEvent,
  ProposePrice as ProposePriceEvent,
  RequestPrice as RequestPriceEvent,
} from "../generated/ManagedOptimisticOracleV2/ManagedOptimisticOracleV2";
import { MarketResolution } from "../generated/schema";
import { UMA_CTF_ADAPTER_V4_ADDRESS } from "./utils/constants";
import { crypto, Address } from "@graphprotocol/graph-ts";

export function handleDisputePrice(event: DisputePriceEvent): void {
  let entity = MarketResolution.load(
    crypto.keccak256(event.params.ancillaryData).toHexString()
  );
  if (entity == null) {
    // might not be a polymarket request
    return;
  }
  // make sure from UMA CTF adapter
  if (
    event.params.requester != Address.fromHexString(UMA_CTF_ADAPTER_V4_ADDRESS)
  ) {
    return;
  }
  if (entity.status == "proposed") {
    // first challenge
    entity.status = "challenged";
    entity.lastUpdateTimestamp = event.block.timestamp;
  } else if (entity.status == "reproposed") {
    // second or further challenges
    entity.status = "disputed";
    entity.wasDisputed = true;
    entity.lastUpdateTimestamp = event.block.timestamp;
  }
  entity.save();
}

export function handleProposePrice(event: ProposePriceEvent): void {
  let entity = MarketResolution.load(
    crypto.keccak256(event.params.ancillaryData).toHexString()
  );
  if (entity == null) {
    // might not be a polymarket request
    return;
  }
  // make sure from UMA CTF adapter
  if (
    event.params.requester != Address.fromHexString(UMA_CTF_ADAPTER_V4_ADDRESS)
  ) {
    return;
  }
  if (entity.status == "posed") {
    // first proposal
    entity.status = "proposed";
    entity.proposedPrice = event.params.proposedPrice;
    entity.lastUpdateTimestamp = event.block.timestamp;
  } else if (entity.status == "challenged") {
    // second or further proposals
    entity.status = "reproposed";
    entity.reproposedPrice = event.params.proposedPrice;
    entity.lastUpdateTimestamp = event.block.timestamp;
  }
  entity.save();
}

export function handleRequestPrice(event: RequestPriceEvent): void {
  let entity = MarketResolution.load(
    crypto.keccak256(event.params.ancillaryData).toHexString()
  );
  if (entity == null) {
    // might not be a polymarket request
    return;
  }
  // make sure from UMA CTF adapter
  if (
    event.params.requester != Address.fromHexString(UMA_CTF_ADAPTER_V4_ADDRESS)
  ) {
    return;
  }
  entity.transactionHash = event.transaction.hash.toHexString();
  entity.logIndex = event.logIndex;
  entity.save();
}
