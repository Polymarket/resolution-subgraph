import { BigInt, log, crypto } from "@graphprotocol/graph-ts";
import {
  QuestionInitialized as QuestionInitializedEvent,
  QuestionReset as QuestionResetEvent,
  QuestionResolved as QuestionResolvedEvent,
  QuestionSettled as QuestionSettledEvent,
} from "../generated/UmaCtfAdapterOld/UmaCtfAdapterOld";
import {
  MarketResolution,
  AncillaryDataHashToQuestionId,
} from "../generated/schema";

export function handleQuestionInitialized(
  event: QuestionInitializedEvent
): void {
  log.info("initialize question {}", [event.params.questionID.toHexString()]);
  let mapping = new AncillaryDataHashToQuestionId(
    crypto.keccak256(event.params.ancillaryData).toHexString()
  );
  mapping.questionId = event.params.questionID.toHexString();

  mapping.save();

  let entity = new MarketResolution(event.params.questionID.toHexString());
  entity.newVersionQ = false;
  entity.author = event.transaction.from;
  entity.ancillaryData = event.params.ancillaryData;
  entity.lastUpdateTimestamp = event.block.timestamp;
  entity.status = "initialized";
  entity.wasDisputed = false;
  entity.proposedPrice = BigInt.fromI32(69); // we use 69 as the unproposed price
  entity.reproposedPrice = BigInt.fromI32(69);
  entity.price = BigInt.fromI32(69);
  entity.updates = "";
  entity.approved = false;
  entity.save();
}

export function handleQuestionReset(event: QuestionResetEvent): void {
  log.info("reset question {}", [event.params.questionID.toHexString()]);
  let entity = MarketResolution.load(
    event.params.questionID.toHexString()
  ) as MarketResolution;

  entity.status = "posed";
  entity.wasDisputed = false;
  entity.proposedPrice = BigInt.fromI32(69); // we use 69 as the unproposed price
  entity.reproposedPrice = BigInt.fromI32(69);
  entity.price = BigInt.fromI32(69);
  entity.updates = "";
  entity.save();
}

export function handleQuestionResolved(event: QuestionResolvedEvent): void {
  log.info("resolve question {}", [event.params.questionID.toHexString()]);
  let entity = MarketResolution.load(
    event.params.questionID.toHexString()
  ) as MarketResolution;
  entity.lastUpdateTimestamp = event.block.timestamp;
  entity.status = "resolved"; // reports price actually resolving question
  entity.save();
}

export function handleQuestionSettled(event: QuestionSettledEvent): void {
  log.info("resolve question {}", [event.params.questionID.toHexString()]);
  let entity = MarketResolution.load(
    event.params.questionID.toHexString()
  ) as MarketResolution;
  entity.lastUpdateTimestamp = event.block.timestamp;
  entity.price = event.params.settledPrice; // sets price then question needs to be resolved
  entity.save();
}
