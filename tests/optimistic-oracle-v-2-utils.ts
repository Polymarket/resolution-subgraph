import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  DisputePrice,
  ProposePrice,
  RequestPrice,
  Settle
} from "../generated/OptimisticOracleV2/OptimisticOracleV2"

export function createDisputePriceEvent(
  requester: Address,
  proposer: Address,
  disputer: Address,
  identifier: Bytes,
  timestamp: BigInt,
  ancillaryData: Bytes,
  proposedPrice: BigInt
): DisputePrice {
  let disputePriceEvent = changetype<DisputePrice>(newMockEvent())

  disputePriceEvent.parameters = new Array()

  disputePriceEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  disputePriceEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  disputePriceEvent.parameters.push(
    new ethereum.EventParam("disputer", ethereum.Value.fromAddress(disputer))
  )
  disputePriceEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromFixedBytes(identifier)
    )
  )
  disputePriceEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  disputePriceEvent.parameters.push(
    new ethereum.EventParam(
      "ancillaryData",
      ethereum.Value.fromBytes(ancillaryData)
    )
  )
  disputePriceEvent.parameters.push(
    new ethereum.EventParam(
      "proposedPrice",
      ethereum.Value.fromSignedBigInt(proposedPrice)
    )
  )

  return disputePriceEvent
}

export function createProposePriceEvent(
  requester: Address,
  proposer: Address,
  identifier: Bytes,
  timestamp: BigInt,
  ancillaryData: Bytes,
  proposedPrice: BigInt,
  expirationTimestamp: BigInt,
  currency: Address
): ProposePrice {
  let proposePriceEvent = changetype<ProposePrice>(newMockEvent())

  proposePriceEvent.parameters = new Array()

  proposePriceEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  proposePriceEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  proposePriceEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromFixedBytes(identifier)
    )
  )
  proposePriceEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  proposePriceEvent.parameters.push(
    new ethereum.EventParam(
      "ancillaryData",
      ethereum.Value.fromBytes(ancillaryData)
    )
  )
  proposePriceEvent.parameters.push(
    new ethereum.EventParam(
      "proposedPrice",
      ethereum.Value.fromSignedBigInt(proposedPrice)
    )
  )
  proposePriceEvent.parameters.push(
    new ethereum.EventParam(
      "expirationTimestamp",
      ethereum.Value.fromUnsignedBigInt(expirationTimestamp)
    )
  )
  proposePriceEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )

  return proposePriceEvent
}

export function createRequestPriceEvent(
  requester: Address,
  identifier: Bytes,
  timestamp: BigInt,
  ancillaryData: Bytes,
  currency: Address,
  reward: BigInt,
  finalFee: BigInt
): RequestPrice {
  let requestPriceEvent = changetype<RequestPrice>(newMockEvent())

  requestPriceEvent.parameters = new Array()

  requestPriceEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  requestPriceEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromFixedBytes(identifier)
    )
  )
  requestPriceEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  requestPriceEvent.parameters.push(
    new ethereum.EventParam(
      "ancillaryData",
      ethereum.Value.fromBytes(ancillaryData)
    )
  )
  requestPriceEvent.parameters.push(
    new ethereum.EventParam("currency", ethereum.Value.fromAddress(currency))
  )
  requestPriceEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  requestPriceEvent.parameters.push(
    new ethereum.EventParam(
      "finalFee",
      ethereum.Value.fromUnsignedBigInt(finalFee)
    )
  )

  return requestPriceEvent
}

export function createSettleEvent(
  requester: Address,
  proposer: Address,
  disputer: Address,
  identifier: Bytes,
  timestamp: BigInt,
  ancillaryData: Bytes,
  price: BigInt,
  payout: BigInt
): Settle {
  let settleEvent = changetype<Settle>(newMockEvent())

  settleEvent.parameters = new Array()

  settleEvent.parameters.push(
    new ethereum.EventParam("requester", ethereum.Value.fromAddress(requester))
  )
  settleEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  settleEvent.parameters.push(
    new ethereum.EventParam("disputer", ethereum.Value.fromAddress(disputer))
  )
  settleEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromFixedBytes(identifier)
    )
  )
  settleEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )
  settleEvent.parameters.push(
    new ethereum.EventParam(
      "ancillaryData",
      ethereum.Value.fromBytes(ancillaryData)
    )
  )
  settleEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromSignedBigInt(price))
  )
  settleEvent.parameters.push(
    new ethereum.EventParam("payout", ethereum.Value.fromUnsignedBigInt(payout))
  )

  return settleEvent
}
