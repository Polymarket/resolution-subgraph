import {
  DisputePrice as DisputePriceEvent,
  ProposePrice as ProposePriceEvent,
  RequestPrice as RequestPriceEvent,
} from "../generated/OptimisticOracleOld/OptimisticOracleOld";
import {
  AncillaryDataHashToQuestionId,
  MarketResolution,
} from "../generated/schema";
import { UMA_CTF_ADAPTER_OLD_ADDRESS } from "./utils/constants";
import { Address, crypto } from "@graphprotocol/graph-ts";

export function handleDisputePrice(event: DisputePriceEvent): void {
  if (event.params.requester != Address.fromHexString(UMA_CTF_ADAPTER_OLD_ADDRESS)) {
    return; // only consider requests from old UMA CTF adapter
  }
  let mapping = AncillaryDataHashToQuestionId.load(
    crypto.keccak256(event.params.ancillaryData).toHexString()
  );
  if (mapping == null) {
    return;
  }
  let entity = MarketResolution.load(mapping.questionId);
  if (entity == null) {
    return;
  }
  entity.status = "disputed";
  entity.wasDisputed = true;
  entity.lastUpdateTimestamp = event.block.timestamp;
  entity.save();
}

export function handleProposePrice(event: ProposePriceEvent): void {
  if (event.params.requester != Address.fromHexString(UMA_CTF_ADAPTER_OLD_ADDRESS)) {
    return; // only consider requests from old UMA CTF adapter
  }
  let mapping = AncillaryDataHashToQuestionId.load(
    crypto.keccak256(event.params.ancillaryData).toHexString()
  );
  if (mapping == null) {
    return;
  }
  let entity = MarketResolution.load(mapping.questionId);
  if (entity == null) {
    return;
  }
  entity.status = "proposed";
  entity.proposedPrice = event.params.proposedPrice;
  entity.lastUpdateTimestamp = event.block.timestamp;
  entity.save();
}

export function handleRequestPrice(event: RequestPriceEvent): void {
  if (event.params.requester != Address.fromHexString(UMA_CTF_ADAPTER_OLD_ADDRESS)) {
    return; // only consider requests from old UMA CTF adapter
  }
  let mapping = AncillaryDataHashToQuestionId.load(
    crypto.keccak256(event.params.ancillaryData).toHexString()
  );
  if (mapping == null) {
    return;
  }
  let entity = MarketResolution.load(mapping.questionId);
  if (entity == null) {
    return;
  }
  entity.status = "posed";
  entity.lastUpdateTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash.toHexString();
  entity.logIndex = event.logIndex;
  entity.save();
}
