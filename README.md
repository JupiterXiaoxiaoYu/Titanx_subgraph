# Titanx_subgraph
Deploy Transaction: https://arbiscan.io/tx/0xf5b63905d2b2d03a9540b8ba4c4b0708e534effc71939c7c4b1608a30916ed75
Titanx Docs: https://docs.titanx.win/titanx
Titanx App: https://app.titanx.win/mine

---

## Introduction
The TitanX subgraph is designed for deep analytics on the TitanX token operations on the Ethereum blockchain. This tool tracks detailed events related to token transactions, stake management, minting operations, and fee distributions, offering a granular view of the tokenomics and stakeholder interactions within the TitanX ecosystem.

## Subgraph Schema

### Entities

#### **BoughtAndBurned**
- **id:** A unique identifier composed of the transaction hash and log index.
- **weth:** The amount of WETH used in the burn process.
- **titan:** The amount of TitanX tokens that were burned.
- **caller:** The Ethereum address that initiated the burn.
- **blockNumber:** The block number where the event was recorded.
- **blockTimestamp:** The timestamp when the block was mined.
- **transactionHash:** The hash of the transaction in which the event occurred.

#### **CollectedFees**
- **id:** A unique identifier formed by concatenating the transaction hash and log index.
- **weth:** Amount of WETH collected as fees.
- **titan:** Amount of TitanX tokens collected as fees.
- **caller:** Ethereum address of the collector.
- **blockNumber:** The block number of the event.
- **blockTimestamp:** Timestamp of the block.
- **transactionHash:** Transaction hash associated with the event.

#### **Approval**
- **id:** Unique identifier derived from the transaction hash and log index.
- **owner:** Address of the token owner granting approval.
- **spender:** Address authorized to spend the tokens.
- **value:** Number of tokens that the spender is authorized to use.
- **blockNumber:** Block number where the approval occurred.
- **blockTimestamp:** Timestamp of the event block.
- **transactionHash:** Hash of the transaction.

#### **ApproveBurnMints**
- **id:** Unique identifier created from the transaction hash and log index.
- **user:** Address of the user involved in the mint.
- **project:** Project identifier for which the minting is approved.
- **amount:** Amount of tokens approved for minting.
- **blockNumber:** Block number of the event.
- **blockTimestamp:** Block timestamp.
- **transactionHash:** Transaction hash.

#### **ApproveBurnStakes**
- **id:** Unique identifier derived from the transaction hash and log index.
- **user:** User's address involved in the staking.
- **project:** Project identifier related to the staking.
- **amount:** Amount of tokens approved for staking.
- **blockNumber:** Event block number.
- **blockTimestamp:** Timestamp of the block.
- **transactionHash:** Associated transaction hash.

#### **CyclePayoutTriggered**
- **id:** Unique identifier constructed from the transaction hash and log index.
- **caller:** Address of the individual who triggered the payout.
- **cycleNo:** Cycle number for the payout.
- **reward:** Amount of reward distributed.
- **burnReward:** Amount of tokens burned as a reward.
- **blockNumber:** Block number.
- **blockTimestamp:** Timestamp of the event.
- **transactionHash:** Transaction hash.

#### **ETHDistributed**
- **id:** Unique identifier from the transaction hash and log index.
- **caller:** Address of the distributor.
- **amount:** Amount of ETH distributed.
- **blockNumber:** Block number.
- **blockTimestamp:** Event timestamp.
- **transactionHash:** Transaction hash.

#### **GlobalDailyUpdateStats**
- **id:** Identifier from the transaction hash and log index.
- **day:** Day of the event.
- **mintCost:** Cost of minting on this day.
- **shareRate:** Share rate applicable.
- **mintableTitan:** Amount of TitanX mintable on this day.
- **mintPowerBonus:** Bonus for mint power.
- **EAABonus:** Early adopter bonus.
- **blockNumber:** Block number.
- **blockTimestamp:** Block timestamp.
- **transactionHash:** Transaction hash.

#### **MintClaimed**
- **id:** Unique identifier from the transaction hash and log index.
- **user:** Address of the user claiming the mint.
- **tRank:** Rank of the user at the time of claiming.
- **rewardMinted:** Total TitanX tokens minted as a reward.
- **penalty:** Any penalty incurred during the mint claim.
- **mintPenalty:** Specific penalty related to minting.
- **blockNumber:** Block number at which the event occurred.
- **blockTimestamp:** Timestamp of the event.
- **transactionHash:** Hash of the transaction.

#### **MintStarted**
- **id:** Unique identifier derived from the transaction hash and log index.
- **user:** Address of the user who started the mint.
- **tRank:** Rank of the user involved in minting.
- **gMintpower:** Global mint power at the time of event.
- **userMintInfo_mintPower:** Mint power of the user.
- **userMintInfo_numOfDays:** Number of days for which minting is effective.
- **userMintInfo_mintableTitan:** Amount of TitanX mintable by the user.
- **userMintInfo_mintStartTs:** Timestamp when minting started.
- **userMintInfo_maturityTs:** Timestamp when minting matures.
- **userMintInfo_mintPowerBonus:** Mint power bonus awarded.
- **userMintInfo_EAABonus:** Early adopter bonus.
- **userMintInfo_mintedTitan:** Amount of Titan minted.
- **userMintInfo_mintCost:** Cost incurred for minting.
- **userMintInfo_status:** Status of the minting process.
- **blockNumber:** Block number of the event.
- **blockTimestamp:** Timestamp of the block.
- **transactionHash:** Transaction hash.

#### **ProtocolFeeReceived**
- **id:** Unique identifier generated from the transaction hash and log index.
- **user:** Address of the user from whom the fee is received.
- **day:** Specific day on which the fee was received.
- **amount:** Amount of the fee received.
- **blockNumber:** Block number.
- **blockTimestamp:** Block timestamp.
- **transactionHash:** Transaction hash.

#### **RewardClaimed**
- **id:** Unique identifier formed by the transaction hash and log index.
- **user:** Address of the user claiming the reward.
- **reward:** Amount of the reward claimed.
- **blockNumber:** Block number at which the event took place.
- **blockTimestamp:** Timestamp of the block.
- **transactionHash:** Hash of the transaction.

#### **StakeEnded**
- **id:** Unique identifier composed of the transaction hash and log index.
- **user:** Address of the user who ended the stake.
- **globalStakeId:** Global identifier for the stake.
- **titanAmount:** Amount of TitanX involved in the stake.
- **penalty:** Penalty incurred if any during the end of the stake.
- **penaltyAmount:** Specific amount deducted as a penalty.
- **blockNumber:** Block number.
- **blockTimestamp:** Timestamp of the event.
- **transactionHash:** Transaction hash.

#### **StakeStarted**
- **id:** Unique identifier using the transaction hash and log index.
- **user:** Address of the user starting the stake.
- **globalStakeId:** Global identifier for the new stake.
- **numOfDays:** Number of days for the stake.
- **userStakeInfo_titanAmount:** Amount of TitanX staked.
- **userStakeInfo_shares:** Shares assigned for the stake.
- **userStakeInfo_numOfDays:** Number of days the stake is valid.
- **userStakeInfo_stakeStartTs:** Timestamp when the stake starts.
- **userStakeInfo_maturityTs:** Timestamp when the stake matures.
- **userStakeInfo_status:** Current status of the stake.
- **blockNumber:** Block number.
- **blockTimestamp:** Timestamp of the block.
- **transactionHash:** Hash of the transaction.

#### **TitanBurned**
- **id:** Identifier from the transaction hash and log index.
- **user:** Address of the user who burned the Titan.
- **project:** Project identifier associated with the burn event.
- **burnPoolCycleIndex:** Index of the burn pool cycle.
- **amount:** Amount of Titan burned.
- **titanSource:** Source of the Titan burned.
- **blockNumber:** Block number.
- **blockTimestamp:** Timestamp of the event.
- **transactionHash:** Transaction hash.

#### **Transfer**
- **id:** Unique identifier created from the transaction hash and log index.
- **from:** Address from which TitanX tokens are transferred.
- **to:** Address to which TitanX tokens are transferred.
- **value:** Amount of TitanX transferred.
- **blockNumber:** Block number at which the transfer took place.
- **blockTimestamp:** Timestamp of the event.
- **transactionHash:** Hash of the transaction.

### Event Handlers

Each entity has a corresponding event handler that processes blockchain events to update the subgraph's data. These handlers extract and store the data in their respective entities efficiently. For instance:

- **handleBoughtAndBurned:** Updates `BoughtAndBurned` entities.
- **handleCollectedFees:** Updates `CollectedFees` entities.
- **handleApproval:** Updates `Approval` entities.


### Example Queries

#### Querying Token Burn Events
```graphql
{
  boughtAndBurned {
    id
    weth
    titan
    caller
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

#### Querying Fee Collection Events
```graphql
{
  collectedFees {
    id
    weth
    titan
    caller
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

## Setup and Deployment

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/JupiterXiaoxiaoYu/Titanx_subgraph.git
   ```

2. **Navigate to the Directory:**
   ```bash
   cd titanx-subgraph
   ```

3. **Install Dependencies:**
   ```bash
   yarn install
   ```

4. **Deploy the Subgraph:**
   ```bash
   graph deploy --product hosted-service <GITHUB_USER>/<SUBGRAPH_NAME>
   ```

## Contributions and Issues

Contributions to this subgraph are welcome. Please submit any issues or pull requests to the repository to help improve the TitanX subgraph's accuracy and functionality.
