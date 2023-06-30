import { BigInt, Address } from "@graphprotocol/graph-ts";
import {
  QuestionInitialized,
  QuestionReset,
  QuestionResolved,
  AncillaryDataUpdated,
} from "../generated/UmaCtfAdapter/UmaCtfAdapter";
import { MarketResolution } from "../generated/schema";

export function handleQuestionInitialized(event: QuestionInitialized): void {
  let entity = new MarketResolution(event.params.questionID.toString());
  entity.author = event.params.creator;
  entity.ancillaryData = event.params.ancillaryData;
  entity.lastUpdateTimestamp = event.params.requestTimestamp;
  entity.status = "posed";
  entity.proposedPrice = new BigInt(3); // we use 3 as the unproposed price
  entity.reproposedPrice = new BigInt(3);
  entity.price = new BigInt(3);
  entity.updates = "";
}

export function handleQuestionReset(event: QuestionReset): void {
  let entity = MarketResolution.load(
    event.params.questionID.toString()
  ) as MarketResolution;

  if (entity.status == "disputed") {
    // too early after dispute case essentially throw away initial proposal
    entity.status = "challenged";
    entity.lastUpdateTimestamp = event.block.timestamp;
    entity.proposedPrice = entity.reproposedPrice;
    entity.reproposedPrice = new BigInt(3);
  }
}

export function handleQuestionResolved(event: QuestionResolved): void {
  let entity = MarketResolution.load(
    event.params.questionID.toString()
  ) as MarketResolution;

  // mark as resolve and set price
  entity.status = "resolved";
  entity.lastUpdateTimestamp = event.block.timestamp;
  entity.price = event.params.settledPrice;
}

export function handleAncillaryDataUpdated(event: AncillaryDataUpdated): void {
  let entity = MarketResolution.load(
    event.params.questionID.toString()
  ) as MarketResolution;

  if (event.params.owner != Address.fromBytes(entity.author)) {
    // only consider updates from question author
    return;
  }

  // add string delimited update
  entity.updates = entity.updates.concat("," + event.params.update.toString());
}
