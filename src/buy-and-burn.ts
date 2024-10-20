import {
  BoughtAndBurned as BoughtAndBurnedEvent,
  CollectedFees as CollectedFeesEvent,
} from "../generated/BuyAndBurn/BuyAndBurn"
import { BoughtAndBurned, CollectedFees } from "../generated/schema"

export function handleBoughtAndBurned(event: BoughtAndBurnedEvent): void {
  let entity = new BoughtAndBurned(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.weth = event.params.weth
  entity.titan = event.params.titan
  entity.caller = event.params.caller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectedFees(event: CollectedFeesEvent): void {
  let entity = new CollectedFees(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.weth = event.params.weth
  entity.titan = event.params.titan
  entity.caller = event.params.caller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
