import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import { DisputePrice } from "../generated/schema"
import { DisputePrice as DisputePriceEvent } from "../generated/OptimisticOracleV2/OptimisticOracleV2"
import { handleDisputePrice } from "../src/optimistic-oracle-v-2"
import { createDisputePriceEvent } from "./optimistic-oracle-v-2-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let requester = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let proposer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let disputer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let identifier = Bytes.fromI32(1234567890)
    let timestamp = BigInt.fromI32(234)
    let ancillaryData = Bytes.fromI32(1234567890)
    let proposedPrice = BigInt.fromI32(234)
    let newDisputePriceEvent = createDisputePriceEvent(
      requester,
      proposer,
      disputer,
      identifier,
      timestamp,
      ancillaryData,
      proposedPrice
    )
    handleDisputePrice(newDisputePriceEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DisputePrice created and stored", () => {
    assert.entityCount("DisputePrice", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DisputePrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "requester",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DisputePrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DisputePrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "disputer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DisputePrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "identifier",
      "1234567890"
    )
    assert.fieldEquals(
      "DisputePrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "timestamp",
      "234"
    )
    assert.fieldEquals(
      "DisputePrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "ancillaryData",
      "1234567890"
    )
    assert.fieldEquals(
      "DisputePrice",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "proposedPrice",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
