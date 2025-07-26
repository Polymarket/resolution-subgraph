import { BigInt, log } from "@graphprotocol/graph-ts";
// the events we use have the same signatures across V2 and V3.1
import {
  QuestionInitialized,
  QuestionReset,
  QuestionResolved,
  PostUpdateCall,
} from "../generated/UmaCtfAdapterV2/UmaCtfAdapterV2";
import { MarketResolution, Moderator, Revision } from "../generated/schema";
import { isApprovalUpdate, isRevisionUpdate } from "./utils/qualifier";

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
  entity.transactionHash = event.transaction.hash.toHexString();
  entity.logIndex = event.logIndex.minus(new BigInt(1)); // price request event is event before this one
  if (isModerator(event.params.creator.toHexString())) {
    entity.approved = true;
  } else {
    entity.approved = false;
  }
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

function isModerator(modAddress: string): boolean {
  let mod = Moderator.load(modAddress);
  if (mod == null) {
    return false;
  }
  return true;
}

function handleRevisionPostUpdate(call: PostUpdateCall): void {
  let questionId = call.inputs.questionID.toHexString();
  log.info("handling revision postUpdate question {}", [questionId]);

  let modAddress = call.transaction.from.toHexString();

  // Ensure that the caller is a moderator
  if (!isModerator(modAddress)) {
    return;
  }

  // Revision entities only get created before a market is approved
  let mkt = MarketResolution.load(questionId);
  if (mkt == null || mkt.approved) {
    return;
  }

  // Revision key: questionId + transactionIndex + update hex
  let revision = new Revision(
    questionId +
      "-" +
      call.transaction.index.toString() +
      "-" +
      call.inputs.update.toHexString()
  );
  revision.questionId = questionId;
  revision.moderator = modAddress;
  revision.timestamp = call.block.timestamp;
  revision.update = call.inputs.update.toString();
  revision.transactionHash = call.transaction.hash.toHexString();
  revision.save();
  return;
}

function handleApprovalPostUpdate(call: PostUpdateCall): void {
  let questionID = call.inputs.questionID.toHexString();
  log.info("handling approval postUpdate question {}", [questionID]);
  let modAddress = call.from.toHexString();

  if (!isModerator(modAddress)) {
    return;
  }

  let mkt = MarketResolution.load(questionID);
  if (mkt == null) {
    return;
  }

  mkt.approved = true;
  mkt.save();
  return;
}

function handleClarificationsPostUpdate(call: PostUpdateCall): void {
  log.info("update question {}", [call.inputs.questionID.toHexString()]);
  let entity = MarketResolution.load(call.inputs.questionID.toHexString());
  if (entity == null) {
    return;
  }
  if (
    !isModerator(call.from.toHexString()) &&
    !(
      call.from.toHexString().toLowerCase() ==
      "0x91430cad2d3975766499717fa0d66a78d814e5c5"
    )
  ) {
    return;
  }
  entity.updates = entity.updates.concat(
    "," +
      call.block.timestamp.toString() +
      "-" +
      call.inputs.update.toHexString()
  );
  entity.save();
}

export function handleAncillaryDataUpdated(call: PostUpdateCall): void {
  log.info("update question {}", [call.inputs.questionID.toHexString()]);

  let update = call.inputs.update.toString();

  // Revision flow
  if (isRevisionUpdate(update)) {
    return handleRevisionPostUpdate(call);
  }

  // Approval flow
  if (isApprovalUpdate(update)) {
    return handleApprovalPostUpdate(call);
  }

  // Standard Post Approval Clarification Flow
  return handleClarificationsPostUpdate(call);
}
