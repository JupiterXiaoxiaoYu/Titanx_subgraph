import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { BoughtAndBurned } from "../generated/schema"
import { BoughtAndBurned as BoughtAndBurnedEvent } from "../generated/BuyAndBurn/BuyAndBurn"
import { handleBoughtAndBurned } from "../src/buy-and-burn"
import { createBoughtAndBurnedEvent } from "./buy-and-burn-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let weth = BigInt.fromI32(234)
    let titan = BigInt.fromI32(234)
    let caller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newBoughtAndBurnedEvent = createBoughtAndBurnedEvent(
      weth,
      titan,
      caller
    )
    handleBoughtAndBurned(newBoughtAndBurnedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BoughtAndBurned created and stored", () => {
    assert.entityCount("BoughtAndBurned", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BoughtAndBurned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "weth",
      "234"
    )
    assert.fieldEquals(
      "BoughtAndBurned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "titan",
      "234"
    )
    assert.fieldEquals(
      "BoughtAndBurned",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
