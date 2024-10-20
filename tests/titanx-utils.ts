import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/TITANX/TITANX"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createApproveBurnMintsEvent(
  user: Address,
  project: Address,
  amount: BigInt
): ApproveBurnMints {
  let approveBurnMintsEvent = changetype<ApproveBurnMints>(newMockEvent())

  approveBurnMintsEvent.parameters = new Array()

  approveBurnMintsEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  approveBurnMintsEvent.parameters.push(
    new ethereum.EventParam("project", ethereum.Value.fromAddress(project))
  )
  approveBurnMintsEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return approveBurnMintsEvent
}

export function createApproveBurnStakesEvent(
  user: Address,
  project: Address,
  amount: BigInt
): ApproveBurnStakes {
  let approveBurnStakesEvent = changetype<ApproveBurnStakes>(newMockEvent())

  approveBurnStakesEvent.parameters = new Array()

  approveBurnStakesEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  approveBurnStakesEvent.parameters.push(
    new ethereum.EventParam("project", ethereum.Value.fromAddress(project))
  )
  approveBurnStakesEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return approveBurnStakesEvent
}

export function createCyclePayoutTriggeredEvent(
  caller: Address,
  cycleNo: BigInt,
  reward: BigInt,
  burnReward: BigInt
): CyclePayoutTriggered {
  let cyclePayoutTriggeredEvent = changetype<CyclePayoutTriggered>(
    newMockEvent()
  )

  cyclePayoutTriggeredEvent.parameters = new Array()

  cyclePayoutTriggeredEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  cyclePayoutTriggeredEvent.parameters.push(
    new ethereum.EventParam(
      "cycleNo",
      ethereum.Value.fromUnsignedBigInt(cycleNo)
    )
  )
  cyclePayoutTriggeredEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )
  cyclePayoutTriggeredEvent.parameters.push(
    new ethereum.EventParam(
      "burnReward",
      ethereum.Value.fromUnsignedBigInt(burnReward)
    )
  )

  return cyclePayoutTriggeredEvent
}

export function createETHDistributedEvent(
  caller: Address,
  amount: BigInt
): ETHDistributed {
  let ethDistributedEvent = changetype<ETHDistributed>(newMockEvent())

  ethDistributedEvent.parameters = new Array()

  ethDistributedEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  ethDistributedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return ethDistributedEvent
}

export function createGlobalDailyUpdateStatsEvent(
  day: BigInt,
  mintCost: BigInt,
  shareRate: BigInt,
  mintableTitan: BigInt,
  mintPowerBonus: BigInt,
  EAABonus: BigInt
): GlobalDailyUpdateStats {
  let globalDailyUpdateStatsEvent = changetype<GlobalDailyUpdateStats>(
    newMockEvent()
  )

  globalDailyUpdateStatsEvent.parameters = new Array()

  globalDailyUpdateStatsEvent.parameters.push(
    new ethereum.EventParam("day", ethereum.Value.fromUnsignedBigInt(day))
  )
  globalDailyUpdateStatsEvent.parameters.push(
    new ethereum.EventParam(
      "mintCost",
      ethereum.Value.fromUnsignedBigInt(mintCost)
    )
  )
  globalDailyUpdateStatsEvent.parameters.push(
    new ethereum.EventParam(
      "shareRate",
      ethereum.Value.fromUnsignedBigInt(shareRate)
    )
  )
  globalDailyUpdateStatsEvent.parameters.push(
    new ethereum.EventParam(
      "mintableTitan",
      ethereum.Value.fromUnsignedBigInt(mintableTitan)
    )
  )
  globalDailyUpdateStatsEvent.parameters.push(
    new ethereum.EventParam(
      "mintPowerBonus",
      ethereum.Value.fromUnsignedBigInt(mintPowerBonus)
    )
  )
  globalDailyUpdateStatsEvent.parameters.push(
    new ethereum.EventParam(
      "EAABonus",
      ethereum.Value.fromUnsignedBigInt(EAABonus)
    )
  )

  return globalDailyUpdateStatsEvent
}

export function createMintClaimedEvent(
  user: Address,
  tRank: BigInt,
  rewardMinted: BigInt,
  penalty: BigInt,
  mintPenalty: BigInt
): MintClaimed {
  let mintClaimedEvent = changetype<MintClaimed>(newMockEvent())

  mintClaimedEvent.parameters = new Array()

  mintClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  mintClaimedEvent.parameters.push(
    new ethereum.EventParam("tRank", ethereum.Value.fromUnsignedBigInt(tRank))
  )
  mintClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardMinted",
      ethereum.Value.fromUnsignedBigInt(rewardMinted)
    )
  )
  mintClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "penalty",
      ethereum.Value.fromUnsignedBigInt(penalty)
    )
  )
  mintClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "mintPenalty",
      ethereum.Value.fromUnsignedBigInt(mintPenalty)
    )
  )

  return mintClaimedEvent
}

export function createMintStartedEvent(
  user: Address,
  tRank: BigInt,
  gMintpower: BigInt,
  userMintInfo: ethereum.Tuple
): MintStarted {
  let mintStartedEvent = changetype<MintStarted>(newMockEvent())

  mintStartedEvent.parameters = new Array()

  mintStartedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  mintStartedEvent.parameters.push(
    new ethereum.EventParam("tRank", ethereum.Value.fromUnsignedBigInt(tRank))
  )
  mintStartedEvent.parameters.push(
    new ethereum.EventParam(
      "gMintpower",
      ethereum.Value.fromUnsignedBigInt(gMintpower)
    )
  )
  mintStartedEvent.parameters.push(
    new ethereum.EventParam(
      "userMintInfo",
      ethereum.Value.fromTuple(userMintInfo)
    )
  )

  return mintStartedEvent
}

export function createProtocolFeeReceviedEvent(
  user: Address,
  day: BigInt,
  amount: BigInt
): ProtocolFeeRecevied {
  let protocolFeeReceviedEvent = changetype<ProtocolFeeRecevied>(newMockEvent())

  protocolFeeReceviedEvent.parameters = new Array()

  protocolFeeReceviedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  protocolFeeReceviedEvent.parameters.push(
    new ethereum.EventParam("day", ethereum.Value.fromUnsignedBigInt(day))
  )
  protocolFeeReceviedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return protocolFeeReceviedEvent
}

export function createRewardClaimedEvent(
  user: Address,
  reward: BigInt
): RewardClaimed {
  let rewardClaimedEvent = changetype<RewardClaimed>(newMockEvent())

  rewardClaimedEvent.parameters = new Array()

  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return rewardClaimedEvent
}

export function createStakeEndedEvent(
  user: Address,
  globalStakeId: BigInt,
  titanAmount: BigInt,
  penalty: BigInt,
  penaltyAmount: BigInt
): StakeEnded {
  let stakeEndedEvent = changetype<StakeEnded>(newMockEvent())

  stakeEndedEvent.parameters = new Array()

  stakeEndedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakeEndedEvent.parameters.push(
    new ethereum.EventParam(
      "globalStakeId",
      ethereum.Value.fromUnsignedBigInt(globalStakeId)
    )
  )
  stakeEndedEvent.parameters.push(
    new ethereum.EventParam(
      "titanAmount",
      ethereum.Value.fromUnsignedBigInt(titanAmount)
    )
  )
  stakeEndedEvent.parameters.push(
    new ethereum.EventParam(
      "penalty",
      ethereum.Value.fromUnsignedBigInt(penalty)
    )
  )
  stakeEndedEvent.parameters.push(
    new ethereum.EventParam(
      "penaltyAmount",
      ethereum.Value.fromUnsignedBigInt(penaltyAmount)
    )
  )

  return stakeEndedEvent
}

export function createStakeStartedEvent(
  user: Address,
  globalStakeId: BigInt,
  numOfDays: BigInt,
  userStakeInfo: ethereum.Tuple
): StakeStarted {
  let stakeStartedEvent = changetype<StakeStarted>(newMockEvent())

  stakeStartedEvent.parameters = new Array()

  stakeStartedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakeStartedEvent.parameters.push(
    new ethereum.EventParam(
      "globalStakeId",
      ethereum.Value.fromUnsignedBigInt(globalStakeId)
    )
  )
  stakeStartedEvent.parameters.push(
    new ethereum.EventParam(
      "numOfDays",
      ethereum.Value.fromUnsignedBigInt(numOfDays)
    )
  )
  stakeStartedEvent.parameters.push(
    new ethereum.EventParam(
      "userStakeInfo",
      ethereum.Value.fromTuple(userStakeInfo)
    )
  )

  return stakeStartedEvent
}

export function createTitanBurnedEvent(
  user: Address,
  project: Address,
  burnPoolCycleIndex: BigInt,
  amount: BigInt,
  titanSource: i32
): TitanBurned {
  let titanBurnedEvent = changetype<TitanBurned>(newMockEvent())

  titanBurnedEvent.parameters = new Array()

  titanBurnedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  titanBurnedEvent.parameters.push(
    new ethereum.EventParam("project", ethereum.Value.fromAddress(project))
  )
  titanBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "burnPoolCycleIndex",
      ethereum.Value.fromUnsignedBigInt(burnPoolCycleIndex)
    )
  )
  titanBurnedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  titanBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "titanSource",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(titanSource))
    )
  )

  return titanBurnedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}
