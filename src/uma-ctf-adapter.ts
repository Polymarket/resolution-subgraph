import { BigInt, Address, log } from "@graphprotocol/graph-ts";
import {
  QuestionInitialized,
  QuestionReset,
  QuestionResolved,
  AncillaryDataUpdated,
} from "../generated/UmaCtfAdapter/UmaCtfAdapter";
import { MarketResolution } from "../generated/schema";

export function handleQuestionInitialized(event: QuestionInitialized): void {
  log.info("initialize question {}", [event.params.questionID.toHexString()]);
  let entity = new MarketResolution(event.params.questionID.toHexString());
  entity.newVersionQ = true;
  entity.author = event.params.creator;
  entity.ancillaryData = event.params.ancillaryData;
  entity.lastUpdateTimestamp = event.params.requestTimestamp;
  entity.status = "posed";
  entity.wasDisputed = false;
  entity.proposedPrice = BigInt.fromI32(69); // we use 69 as the unproposed price
  entity.reproposedPrice = BigInt.fromI32(69);
  entity.price = BigInt.fromI32(69);
  entity.updates = "";
  entity.save();
}

export function handleQuestionReset(event: QuestionReset): void {
  log.info("reset question {}", [event.params.questionID.toHexString()]);
  let entity = MarketResolution.load(
    event.params.questionID.toHexString()
  ) as MarketResolution;

  if (entity.status == "disputed") {
    // too early after dispute case essentially throw away initial proposal
    entity.status = "challenged";
    entity.lastUpdateTimestamp = event.block.timestamp;
    entity.proposedPrice = entity.reproposedPrice;
    entity.reproposedPrice = BigInt.fromI32(69);
    entity.save();
  }
}

export function handleQuestionResolved(event: QuestionResolved): void {
  log.info("resolve question {}", [event.params.questionID.toHexString()]);
  let entity = MarketResolution.load(
    event.params.questionID.toHexString()
  ) as MarketResolution;

  // TODO: add checks on status?

  // mark as resolve and set price
  entity.status = "resolved";
  entity.lastUpdateTimestamp = event.block.timestamp;
  entity.price = event.params.settledPrice;
  entity.save();
}

export function handleAncillaryDataUpdated(event: AncillaryDataUpdated): void {
  log.info("update question {}", [event.params.questionID.toHexString()]);
  let entity = MarketResolution.load(
    event.params.questionID.toHexString()
  ) as MarketResolution;

  if (event.params.owner != Address.fromBytes(entity.author)) {
    // only consider updates from question author
    return;
  }

  // add string delimited update
  entity.updates = entity.updates.concat(
    "," +
      event.block.timestamp.toString() +
      "-" +
      event.params.update.toHexString()
  );
  entity.save();
}
