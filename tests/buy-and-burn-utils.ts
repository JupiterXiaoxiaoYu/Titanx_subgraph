import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  BoughtAndBurned,
  CollectedFees
} from "../generated/BuyAndBurn/BuyAndBurn"

export function createBoughtAndBurnedEvent(
  weth: BigInt,
  titan: BigInt,
  caller: Address
): BoughtAndBurned {
  let boughtAndBurnedEvent = changetype<BoughtAndBurned>(newMockEvent())

  boughtAndBurnedEvent.parameters = new Array()

  boughtAndBurnedEvent.parameters.push(
    new ethereum.EventParam("weth", ethereum.Value.fromUnsignedBigInt(weth))
  )
  boughtAndBurnedEvent.parameters.push(
    new ethereum.EventParam("titan", ethereum.Value.fromUnsignedBigInt(titan))
  )
  boughtAndBurnedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return boughtAndBurnedEvent
}

export function createCollectedFeesEvent(
  weth: BigInt,
  titan: BigInt,
  caller: Address
): CollectedFees {
  let collectedFeesEvent = changetype<CollectedFees>(newMockEvent())

  collectedFeesEvent.parameters = new Array()

  collectedFeesEvent.parameters.push(
    new ethereum.EventParam("weth", ethereum.Value.fromUnsignedBigInt(weth))
  )
  collectedFeesEvent.parameters.push(
    new ethereum.EventParam("titan", ethereum.Value.fromUnsignedBigInt(titan))
  )
  collectedFeesEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return collectedFeesEvent
}
