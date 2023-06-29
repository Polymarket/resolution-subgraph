import {
  DisputePrice as DisputePriceEvent,
  ProposePrice as ProposePriceEvent,
  RequestPrice as RequestPriceEvent,
  Settle as SettleEvent
} from "../generated/OptimisticOracleV2/OptimisticOracleV2"
import {
  DisputePrice,
  ProposePrice,
  RequestPrice,
  Settle
} from "../generated/schema"

export function handleDisputePrice(event: DisputePriceEvent): void {
  let entity = new DisputePrice(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requester = event.params.requester
  entity.proposer = event.params.proposer
  entity.disputer = event.params.disputer
  entity.identifier = event.params.identifier
  entity.timestamp = event.params.timestamp
  entity.ancillaryData = event.params.ancillaryData
  entity.proposedPrice = event.params.proposedPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposePrice(event: ProposePriceEvent): void {
  let entity = new ProposePrice(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requester = event.params.requester
  entity.proposer = event.params.proposer
  entity.identifier = event.params.identifier
  entity.timestamp = event.params.timestamp
  entity.ancillaryData = event.params.ancillaryData
  entity.proposedPrice = event.params.proposedPrice
  entity.expirationTimestamp = event.params.expirationTimestamp
  entity.currency = event.params.currency

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRequestPrice(event: RequestPriceEvent): void {
  let entity = new RequestPrice(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requester = event.params.requester
  entity.identifier = event.params.identifier
  entity.timestamp = event.params.timestamp
  entity.ancillaryData = event.params.ancillaryData
  entity.currency = event.params.currency
  entity.reward = event.params.reward
  entity.finalFee = event.params.finalFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSettle(event: SettleEvent): void {
  let entity = new Settle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.requester = event.params.requester
  entity.proposer = event.params.proposer
  entity.disputer = event.params.disputer
  entity.identifier = event.params.identifier
  entity.timestamp = event.params.timestamp
  entity.ancillaryData = event.params.ancillaryData
  entity.price = event.params.price
  entity.payout = event.params.payout

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
