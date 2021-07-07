const { addressBook } = require('blockchain-addressbook');

const { bsc, heco, avax, polygon, fantom } = addressBook;

const chains = {
  56: {
    id: 'bsc',
    chainId: 56,
    wnative: bsc.tokens.WBNB.address,
    rewardPool: bsc.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: bsc.platforms.beefyfinance.treasury,
    beefyFeeBatcher: bsc.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 2,
    wnativeUnwrapInterval: 8,
    rpc: process.env.BSC_RPC,
    appVaultsFilename: 'bsc_pools.js',
    multicall: bsc.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 1457038,
    blockTime: 3,
    blockExplorer: "http://bscscan.com"
  },
  128: {
    id: 'heco',
    chainId: 128,
    wnative: heco.tokens.WHT.address,
    rewardPool: heco.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: heco.platforms.beefyfinance.treasury,
    beefyFeeBatcher: heco.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 2,
    wnativeUnwrapInterval: 4,
    rpc: process.env.HECO_RPC,
    appVaultsFilename: 'heco_pools.js',
    multicall: heco.platforms.beefyfinance.multicall,
    queryLimit: 2000,
    queryInterval: 100,
    firstRewardBlock: 3850000,
    blockTime: 3,
    blockExplorer: "https://hecoinfo.com"
  },
  43114: {
    id: 'avax',
    chainId: 43114,
    wnative: avax.tokens.WAVAX.address,
    rewardPool: avax.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: avax.platforms.beefyfinance.treasury,
    beefyFeeBatcher: avax.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 8,
    wnativeUnwrapInterval: 8,
    rpc: process.env.AVAX_RPC,
    appVaultsFilename: 'avalanche_pools.js',
    multicall: avax.platforms.beefyfinance.multicall,
    queryLimit: 512,
    queryInterval: 100,
    firstRewardBlock: 0,
    blockTime: 5,
    blockExplorer: "https://cchain.explorer.avax.network"
  },
  137: {
    id: 'polygon',
    chainId: 137,
    wnative: polygon.tokens.WMATIC.address,
    rewardPool: polygon.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: polygon.platforms.beefyfinance.treasury,
    beefyFeeBatcher: polygon.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    wnativeUnwrapInterval: 4,
    rpc: process.env.POLYGON_RPC,
    appVaultsFilename: 'polygon_pools.js',
    multicall: polygon.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 14172110,
    blockTime: 2,
    blockExplorer: "https://polygonscan.com"
  },
  250: {
    id: 'fantom',
    chainId: 250,
    wnative: fantom.tokens.WFTM.address,
    rewardPool: fantom.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: fantom.platforms.beefyfinance.treasury,
    beefyFeeBatcher: fantom.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    wnativeUnwrapInterval: 4,
    rpc: process.env.FANTOM_RPC,
    appVaultsFilename: 'fantom_pools.js',
    multicall: fantom.platforms.beefyfinance.multicall,
    queryLimit: 500,
    queryInterval: 100,
    firstRewardBlock: 7673132,
    blockTime: 10,
    blockExplorer: "https://ftmscan.com"
  },
};

module.exports = chains;
