import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AncillaryDataUpdated,
  NewAdmin,
  QuestionEmergencyResolved,
  QuestionFlagged,
  QuestionInitialized,
  QuestionPaused,
  QuestionReset,
  QuestionResolved,
  QuestionUnpaused,
  RemovedAdmin
} from "../generated/UmaCtfAdapter/UmaCtfAdapter"

export function createAncillaryDataUpdatedEvent(
  questionID: Bytes,
  owner: Address,
  update: Bytes
): AncillaryDataUpdated {
  let ancillaryDataUpdatedEvent = changetype<AncillaryDataUpdated>(
    newMockEvent()
  )

  ancillaryDataUpdatedEvent.parameters = new Array()

  ancillaryDataUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "questionID",
      ethereum.Value.fromFixedBytes(questionID)
    )
  )
  ancillaryDataUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  ancillaryDataUpdatedEvent.parameters.push(
    new ethereum.EventParam("update", ethereum.Value.fromBytes(update))
  )

  return ancillaryDataUpdatedEvent
}

export function createNewAdminEvent(
  admin: Address,
  newAdminAddress: Address
): NewAdmin {
  let newAdminEvent = changetype<NewAdmin>(newMockEvent())

  newAdminEvent.parameters = new Array()

  newAdminEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  newAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminAddress",
      ethereum.Value.fromAddress(newAdminAddress)
    )
  )

  return newAdminEvent
}

export function createQuestionEmergencyResolvedEvent(
  questionID: Bytes,
  payouts: Array<BigInt>
): QuestionEmergencyResolved {
  let questionEmergencyResolvedEvent = changetype<QuestionEmergencyResolved>(
    newMockEvent()
  )

  questionEmergencyResolvedEvent.parameters = new Array()

  questionEmergencyResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "questionID",
      ethereum.Value.fromFixedBytes(questionID)
    )
  )
  questionEmergencyResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "payouts",
      ethereum.Value.fromUnsignedBigIntArray(payouts)
    )
  )

  return questionEmergencyResolvedEvent
}

export function createQuestionFlaggedEvent(questionID: Bytes): QuestionFlagged {
  let questionFlaggedEvent = changetype<QuestionFlagged>(newMockEvent())

  questionFlaggedEvent.parameters = new Array()

  questionFlaggedEvent.parameters.push(
    new ethereum.EventParam(
      "questionID",
      ethereum.Value.fromFixedBytes(questionID)
    )
  )

  return questionFlaggedEvent
}

export function createQuestionInitializedEvent(
  questionID: Bytes,
  requestTimestamp: BigInt,
  creator: Address,
  ancillaryData: Bytes,
  rewardToken: Address,
  reward: BigInt,
  proposalBond: BigInt
): QuestionInitialized {
  let questionInitializedEvent = changetype<QuestionInitialized>(newMockEvent())

  questionInitializedEvent.parameters = new Array()

  questionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "questionID",
      ethereum.Value.fromFixedBytes(questionID)
    )
  )
  questionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "requestTimestamp",
      ethereum.Value.fromUnsignedBigInt(requestTimestamp)
    )
  )
  questionInitializedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  questionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "ancillaryData",
      ethereum.Value.fromBytes(ancillaryData)
    )
  )
  questionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )
  questionInitializedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  questionInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalBond",
      ethereum.Value.fromUnsignedBigInt(proposalBond)
    )
  )

  return questionInitializedEvent
}

export function createQuestionPausedEvent(questionID: Bytes): QuestionPaused {
  let questionPausedEvent = changetype<QuestionPaused>(newMockEvent())

  questionPausedEvent.parameters = new Array()

  questionPausedEvent.parameters.push(
    new ethereum.EventParam(
      "questionID",
      ethereum.Value.fromFixedBytes(questionID)
    )
  )

  return questionPausedEvent
}

export function createQuestionResetEvent(questionID: Bytes): QuestionReset {
  let questionResetEvent = changetype<QuestionReset>(newMockEvent())

  questionResetEvent.parameters = new Array()

  questionResetEvent.parameters.push(
    new ethereum.EventParam(
      "questionID",
      ethereum.Value.fromFixedBytes(questionID)
    )
  )

  return questionResetEvent
}

export function createQuestionResolvedEvent(
  questionID: Bytes,
  settledPrice: BigInt,
  payouts: Array<BigInt>
): QuestionResolved {
  let questionResolvedEvent = changetype<QuestionResolved>(newMockEvent())

  questionResolvedEvent.parameters = new Array()

  questionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "questionID",
      ethereum.Value.fromFixedBytes(questionID)
    )
  )
  questionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "settledPrice",
      ethereum.Value.fromSignedBigInt(settledPrice)
    )
  )
  questionResolvedEvent.parameters.push(
    new ethereum.EventParam(
      "payouts",
      ethereum.Value.fromUnsignedBigIntArray(payouts)
    )
  )

  return questionResolvedEvent
}

export function createQuestionUnpausedEvent(
  questionID: Bytes
): QuestionUnpaused {
  let questionUnpausedEvent = changetype<QuestionUnpaused>(newMockEvent())

  questionUnpausedEvent.parameters = new Array()

  questionUnpausedEvent.parameters.push(
    new ethereum.EventParam(
      "questionID",
      ethereum.Value.fromFixedBytes(questionID)
    )
  )

  return questionUnpausedEvent
}

export function createRemovedAdminEvent(
  admin: Address,
  removedAdmin: Address
): RemovedAdmin {
  let removedAdminEvent = changetype<RemovedAdmin>(newMockEvent())

  removedAdminEvent.parameters = new Array()

  removedAdminEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  removedAdminEvent.parameters.push(
    new ethereum.EventParam(
      "removedAdmin",
      ethereum.Value.fromAddress(removedAdmin)
    )
  )

  return removedAdminEvent
}
