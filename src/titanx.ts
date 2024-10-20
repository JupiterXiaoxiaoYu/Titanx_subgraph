import {
  Approval as ApprovalEvent,
  ApproveBurnMints as ApproveBurnMintsEvent,
  ApproveBurnStakes as ApproveBurnStakesEvent,
  CyclePayoutTriggered as CyclePayoutTriggeredEvent,
  ETHDistributed as ETHDistributedEvent,
  GlobalDailyUpdateStats as GlobalDailyUpdateStatsEvent,
  MintClaimed as MintClaimedEvent,
  MintStarted as MintStartedEvent,
  ProtocolFeeRecevied as ProtocolFeeReceviedEvent,
  RewardClaimed as RewardClaimedEvent,
  StakeEnded as StakeEndedEvent,
  StakeStarted as StakeStartedEvent,
  TitanBurned as TitanBurnedEvent,
  Transfer as TransferEvent
} from "../generated/TITANX/TITANX"
import {
  Approval,
  ApproveBurnMints,
  ApproveBurnStakes,
  CyclePayoutTriggered,
  ETHDistributed,
  GlobalDailyUpdateStats,
  MintClaimed,
  MintStarted,
  ProtocolFeeRecevied,
  RewardClaimed,
  StakeEnded,
  StakeStarted,
  TitanBurned,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproveBurnMints(event: ApproveBurnMintsEvent): void {
  let entity = new ApproveBurnMints(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.project = event.params.project
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproveBurnStakes(event: ApproveBurnStakesEvent): void {
  let entity = new ApproveBurnStakes(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.project = event.params.project
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCyclePayoutTriggered(
  event: CyclePayoutTriggeredEvent
): void {
  let entity = new CyclePayoutTriggered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.cycleNo = event.params.cycleNo
  entity.reward = event.params.reward
  entity.burnReward = event.params.burnReward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleETHDistributed(event: ETHDistributedEvent): void {
  let entity = new ETHDistributed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGlobalDailyUpdateStats(
  event: GlobalDailyUpdateStatsEvent
): void {
  let entity = new GlobalDailyUpdateStats(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.day = event.params.day
  entity.mintCost = event.params.mintCost
  entity.shareRate = event.params.shareRate
  entity.mintableTitan = event.params.mintableTitan
  entity.mintPowerBonus = event.params.mintPowerBonus
  entity.EAABonus = event.params.EAABonus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintClaimed(event: MintClaimedEvent): void {
  let entity = new MintClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tRank = event.params.tRank
  entity.rewardMinted = event.params.rewardMinted
  entity.penalty = event.params.penalty
  entity.mintPenalty = event.params.mintPenalty

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintStarted(event: MintStartedEvent): void {
  let entity = new MintStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.tRank = event.params.tRank
  entity.gMintpower = event.params.gMintpower
  entity.userMintInfo_mintPower = event.params.userMintInfo.mintPower
  entity.userMintInfo_numOfDays = event.params.userMintInfo.numOfDays
  entity.userMintInfo_mintableTitan = event.params.userMintInfo.mintableTitan
  entity.userMintInfo_mintStartTs = event.params.userMintInfo.mintStartTs
  entity.userMintInfo_maturityTs = event.params.userMintInfo.maturityTs
  entity.userMintInfo_mintPowerBonus = event.params.userMintInfo.mintPowerBonus
  entity.userMintInfo_EAABonus = event.params.userMintInfo.EAABonus
  entity.userMintInfo_mintedTitan = event.params.userMintInfo.mintedTitan
  entity.userMintInfo_mintCost = event.params.userMintInfo.mintCost
  entity.userMintInfo_status = event.params.userMintInfo.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProtocolFeeRecevied(
  event: ProtocolFeeReceviedEvent
): void {
  let entity = new ProtocolFeeRecevied(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.day = event.params.day
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardClaimed(event: RewardClaimedEvent): void {
  let entity = new RewardClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.reward = event.params.reward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeEnded(event: StakeEndedEvent): void {
  let entity = new StakeEnded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.globalStakeId = event.params.globalStakeId
  entity.titanAmount = event.params.titanAmount
  entity.penalty = event.params.penalty
  entity.penaltyAmount = event.params.penaltyAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeStarted(event: StakeStartedEvent): void {
  let entity = new StakeStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.globalStakeId = event.params.globalStakeId
  entity.numOfDays = event.params.numOfDays
  entity.userStakeInfo_titanAmount = event.params.userStakeInfo.titanAmount
  entity.userStakeInfo_shares = event.params.userStakeInfo.shares
  entity.userStakeInfo_numOfDays = event.params.userStakeInfo.numOfDays
  entity.userStakeInfo_stakeStartTs = event.params.userStakeInfo.stakeStartTs
  entity.userStakeInfo_maturityTs = event.params.userStakeInfo.maturityTs
  entity.userStakeInfo_status = event.params.userStakeInfo.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTitanBurned(event: TitanBurnedEvent): void {
  let entity = new TitanBurned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.project = event.params.project
  entity.burnPoolCycleIndex = event.params.burnPoolCycleIndex
  entity.amount = event.params.amount
  entity.titanSource = event.params.titanSource

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
