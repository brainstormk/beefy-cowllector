require('dotenv').config();
const { addressBook } = require('blockchain-addressbook');

const {
  aurora,
  arbitrum,
  bsc,
  heco,
  avax,
  polygon,
  fantom,
  one,
  celo,
  moonriver,
  cronos,
  fuse,
  metis,
  moonbeam,
  emerald,
  optimism,
} = addressBook;

const chains = {
  56: {
    id: 'bsc',
    chainId: 56,
    wnative: bsc.tokens.WNATIVE.address,
    rewardPool: bsc.platforms.beefyfinance.rewardPool,
    notifyInterval: 10,
    treasury: bsc.platforms.beefyfinance.treasury,
    beefyFeeBatcher: bsc.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 4,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.BSC_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.BSC_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 8,
    wnativeMinToUnwrap: process.env.BSC_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.BSC_RPC || 'https://bsc-dataseed2.defibit.io/',
    appVaultsFilename: 'bsc.json',
    multicall: bsc.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    firstRewardBlock: 1457038,
    blockTime: 3,
    blockExplorer: 'http://bscscan.com',
    gas: {
      limit: Number(process.env.BSC_GAS_LIMIT) || 2e6,
      price: Number(process.env.BSC_GAS_PRICE) || 5e9,
      priceCap: Number(process.env.BSC_GAS_PRICE_CAP),
    },
  },
  128: {
    id: 'heco',
    chainId: 128,
    wnative: heco.tokens.WNATIVE.address,
    rewardPool: heco.platforms.beefyfinance.rewardPool,
    treasury: heco.platforms.beefyfinance.treasury,
    beefyFeeBatcher: heco.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 4,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.HECO_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.HECO_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 4,
    wnativeMinToUnwrap: process.env.HECO_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.HECO_RPC || 'https://http-mainnet.hecochain.com',
    appVaultsFilename: 'heco.json',
    multicall: heco.platforms.beefyfinance.multicall,
    queryLimit: 2000,
    queryInterval: 100,
    blockTime: 3,
    blockExplorer: 'https://hecoinfo.com',
    gas: {
      limit: Number(process.env.HECO_GAS_LIMIT) || 30e6,
      price: Number(process.env.HECO_GAS_PRICE) || 3e9,
      priceCap: Number(process.env.HECO_GAS_PRICE_CAP),
    },
  },
  43114: {
    id: 'avax',
    chainId: 43114,
    wnative: avax.tokens.WNATIVE.address,
    rewardPool: avax.platforms.beefyfinance.rewardPool,
    treasury: avax.platforms.beefyfinance.treasury,
    beefyFeeBatcher: avax.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 8,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.AVAX_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.AVAX_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 8,
    wnativeMinToUnwrap: process.env.AVAX_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.AVAX_RPC || 'https://api.avax.network/ext/bc/C/rpc',
    appVaultsFilename: 'avax.json',
    multicall: avax.platforms.beefyfinance.multicall,
    queryLimit: 512,
    queryInterval: 100,
    blockTime: 5,
    blockExplorer: 'https://cchain.explorer.avax.network',
    gas: {
      limit: Number(process.env.AVAX_GAS_LIMIT) || 1e6,
      price: Number(process.env.AVAX_GAS_PRICE) || 30e9,
      priceCap: Number(process.env.AVAX_GAS_PRICE_CAP),
    },
  },
  137: {
    id: 'polygon',
    chainId: 137,
    wnative: polygon.tokens.WNATIVE.address,
    rewardPool: polygon.platforms.beefyfinance.rewardPool,
    treasury: polygon.platforms.beefyfinance.treasury,
    beefyFeeBatcher: polygon.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.POLYGON_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.POLYGON_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 4,
    wnativeMinToUnwrap: process.env.POLYGON_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.POLYGON_RPC || 'https://polygon-rpc.com/',
    appVaultsFilename: 'polygon.json',
    multicall: polygon.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 2,
    blockExplorer: 'https://polygonscan.com',
    gas: {
      limit: Number(process.env.POLYGON_GAS_LIMIT) || 2e6,
      price: Number(process.env.POLYGON_GAS_PRICE) || 40e9,
      priceCap: Number(process.env.POLYGON_GAS_PRICE_CAP),
    },
  },
  250: {
    id: 'fantom',
    chainId: 250,
    wnative: fantom.tokens.WNATIVE.address,
    rewardPool: fantom.platforms.beefyfinance.rewardPool,
    treasury: fantom.platforms.beefyfinance.treasury,
    beefyFeeBatcher: fantom.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.FANTOM_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.FANTOM_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 4,
    wnativeMinToUnwrap: process.env.FANTOM_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.FANTOM_RPC || 'https://rpcapi.fantom.network',
    appVaultsFilename: 'fantom.json',
    multicall: fantom.platforms.beefyfinance.multicall,
    queryLimit: 500,
    queryInterval: 100,
    blockTime: 10,
    blockExplorer: 'https://ftmscan.com',
    gas: {
      limit: Number(process.env.FANTOM_GAS_LIMIT) || 95e5,
      price: Number(process.env.FANTOM_GAS_PRICE) || 1e9,
      priceCap: Number(process.env.FANTOM_GAS_PRICE_CAP),
    },
  },
  1666600000: {
    id: 'one',
    chainId: 1666600000,
    wnative: one.tokens.WNATIVE.address,
    rewardPool: one.platforms.beefyfinance.rewardPool,
    treasury: one.platforms.beefyfinance.treasury,
    beefyFeeBatcher: one.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.ONE_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.ONE_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 4,
    wnativeMinToUnwrap: process.env.ONE_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.ONE_RPC || 'https://api.s0.t.hmny.io/',
    appVaultsFilename: 'harmony.json',
    multicall: one.platforms.beefyfinance.multicall,
    queryLimit: 500,
    queryInterval: 100,
    blockTime: 3,
    blockExplorer: 'https://explorer.harmony.one/',
    gas: {
      limit: Number(process.env.ONE_GAS_LIMIT) || 1e6,
      price: Number(process.env.ONE_GAS_PRICE) || null,
      priceCap: Number(process.env.ONE_GAS_PRICE_CAP),
    },
  },
  42161: {
    id: 'arbitrum',
    chainId: 42161,
    wnative: arbitrum.tokens.WNATIVE.address,
    rewardPool: arbitrum.platforms.beefyfinance.rewardPool,
    treasury: arbitrum.platforms.beefyfinance.treasury,
    beefyFeeBatcher: arbitrum.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 8,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.ARBITRUM_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.ARBITRUM_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 20,
    wnativeMinToUnwrap: process.env.ARBITRUM_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.ARBITRUM_RPC || 'https://arb1.arbitrum.io/rpc',
    appVaultsFilename: 'arbitrum.json',
    multicall: arbitrum.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 2.8,
    blockExplorer: 'http://arbiscan.com',
    gas: {
      limit: Number(process.env.ARBITRUM_GAS_LIMIT) || 30e6,
      price: Number(process.env.ARBITRUM_GAS_PRICE) || 5e9,
      priceCap: Number(process.env.ARBITRUM_GAS_PRICE_CAP),
    },
  },
  42220: {
    id: 'celo',
    chainId: 42220,
    rewardPool: celo.platforms.beefyfinance.rewardPool,
    treasury: celo.platforms.beefyfinance.treasury,
    beefyFeeBatcher: celo.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.CELO_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.CELO_HARVEST_HOUR_INTERVAL)
      : 1,
    wnative: null,
    wnativeUnwrapInterval: null,
    wnativeMinToUnwrap: process.env.CELO_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.CELO_RPC || 'https://forno.celo.org',
    appVaultsFilename: 'celo.json',
    multicall: celo.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 5,
    blockExplorer: 'https://explorer.celo.org/',
    gas: {
      limit: Number(process.env.CELO_GAS_LIMIT) || 5e6,
      price: Number(process.env.CELO_GAS_PRICE) || 5e8,
      priceCap: Number(process.env.CELO_GAS_PRICE_CAP),
    },
  },
  1285: {
    id: 'moonriver',
    chainId: 1285,
    wnative: moonriver.tokens.WNATIVE.address,
    rewardPool: moonriver.platforms.beefyfinance.rewardPool,
    treasury: moonriver.platforms.beefyfinance.treasury,
    beefyFeeBatcher: moonriver.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 2,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.MOONRIVER_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.MOONRIVER_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 6,
    wnativeMinToUnwrap: process.env.MOONRIVER_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.MOONRIVER_RPC || 'https://moonriver.api.onfinality.io/public',
    appVaultsFilename: 'moonriver.json',
    multicall: moonriver.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 15,
    blockExplorer: 'https://moonriver.moonscan.io/',
    gas: {
      limit: Number(process.env.MOONRIVER_GAS_LIMIT) || 5e6,
      price: Number(process.env.MOONRIVER_GAS_PRICE) || 1e9,
      priceCap: Number(process.env.MOONRIVER_GAS_PRICE_CAP),
    },
  },
  25: {
    id: 'cronos',
    chainId: 25,
    wnative: cronos.tokens.WNATIVE.address,
    rewardPool: cronos.platforms.beefyfinance.rewardPool,
    treasury: cronos.platforms.beefyfinance.treasury,
    beefyFeeBatcher: cronos.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 6,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.CRONOS_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.CRONOS_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 6,
    wnativeMinToUnwrap: process.env.CRONOS_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.CRONOS_RPC || 'https://evm.cronos.org',
    appVaultsFilename: 'cronos.json',
    multicall: cronos.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 5,
    blockExplorer: 'https://cronoscan.com',
    gas: {
      limit: Number(process.env.CRONOS_GAS_LIMIT) || 1e6,
      price: Number(process.env.CRONOS_GAS_PRICE) || 5e12,
      priceCap: Number(process.env.CRONOS_GAS_PRICE_CAP),
    },
  },
  122: {
    id: 'fuse',
    chainId: 122,
    wnative: fuse.tokens.WNATIVE.address,
    rewardPool: fuse.platforms.beefyfinance.rewardPool,
    treasury: fuse.platforms.beefyfinance.treasury,
    beefyFeeBatcher: fuse.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 1,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.FUSE_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.FUSE_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 6,
    wnativeMinToUnwrap: process.env.FUSE_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.FUSE_RPC || 'https://rpc.fuse.io',
    appVaultsFilename: 'fuse.json',
    multicall: fuse.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 5,
    blockExplorer: 'https://explorer.fuse.io/',
    gas: {
      limit: Number(process.env.FUSE_GAS_LIMIT) || 10e6,
      price: Number(process.env.FUSE_GAS_PRICE) || 1e9,
      priceCap: Number(process.env.FUSE_GAS_PRICE_CAP),
    },
  },
  1088: {
    id: 'metis',
    chainId: 1088,
    wnative: null,
    rewardPool: metis.platforms.beefyfinance.rewardPool,
    treasury: metis.platforms.beefyfinance.treasury,
    beefyFeeBatcher: metis.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 4,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.METIS_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.METIS_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 6,
    wnativeMinToUnwrap: process.env.METIS_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.METIS_RPC || 'https://andromeda.metis.io/?owner=1088',
    appVaultsFilename: 'metis.json',
    multicall: metis.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 1,
    blockExplorer: 'https://andromeda-explorer.metis.io/',
    gas: {
      limit: Number(process.env.METIS_GAS_LIMIT) || 10e6,
      price: Number(process.env.METIS_GAS_PRICE) || 30e9,
      priceCap: Number(process.env.METIS_GAS_PRICE_CAP),
    },
  },
  1313161554: {
    id: 'aurora',
    chainId: 1313161554,
    wnative: aurora.tokens.WNATIVE.address,
    rewardPool: aurora.platforms.beefyfinance.rewardPool,
    treasury: aurora.platforms.beefyfinance.treasury,
    beefyFeeBatcher: aurora.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 2,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.AURORA_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.AURORA_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 8,
    wnativeMinToUnwrap: process.env.AURORA_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc:
      process.env.AURORA_RPC ||
      'https://mainnet.aurora.dev/Fon6fPMs5rCdJc4mxX4kiSK1vsKdzc3D8k6UF8aruek',
    appVaultsFilename: 'aurora.json',
    multicall: aurora.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 1,
    blockExplorer: 'https://explorer.mainnet.aurora.dev/',
    gas: {
      limit: Number(process.env.AURORA_GAS_LIMIT) || 0,
      price: Number(process.env.AURORA_GAS_PRICE) || 0,
      priceCap: Number(process.env.AURORA_GAS_PRICE_CAP),
    },
  },
  1284: {
    id: 'moonbeam',
    chainId: 1284,
    wnative: moonbeam.tokens.WNATIVE.address,
    rewardPool: moonbeam.platforms.beefyfinance.rewardPool,
    treasury: moonbeam.platforms.beefyfinance.treasury,
    beefyFeeBatcher: moonbeam.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 12,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.MOONBEAM_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.MOONBEAM_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 6,
    wnativeMinToUnwrap: process.env.MOONBEAM_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.MOONBEAM_RPC || 'https://rpc.api.moonbeam.network',
    appVaultsFilename: 'moonbeam.json',
    multicall: moonbeam.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 1,
    blockExplorer: 'https://moonscan.io/',
    gas: {
      limit: Number(process.env.MOONBEAM_GAS_LIMIT) || 10e6,
      price: Number(process.env.MOONBEAM_GAS_PRICE) || 100e9,
      priceCap: Number(process.env.MOONBEAM_GAS_PRICE_CAP),
    },
  },
  42262: {
    id: 'emerald',
    chainId: 42262,
    wnative: emerald.tokens.WNATIVE.address,
    rewardPool: emerald.platforms.beefyfinance.rewardPool,
    treasury: emerald.platforms.beefyfinance.treasury,
    beefyFeeBatcher: emerald.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 12,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.OASIS_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.OASIS_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 6,
    wnativeMinToUnwrap: process.env.OASIS_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.OASIS_RPC || 'https://emerald.oasis.dev',
    appVaultsFilename: 'emerald.json',
    multicall: emerald.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 6,
    blockExplorer: 'https://explorer.emerald.oasis.dev/',
    gas: {
      limit: Number(process.env.OASIS_GAS_LIMIT) || 10e6,
      price: Number(process.env.OASIS_GAS_PRICE) || 100e9,
      priceCap: Number(process.env.OASIS_GAS_PRICE_CAP),
    },
  },
  10: {
    id: 'optimism',
    chainId: 10,
    wnative: optimism.tokens.WNATIVE.address,
    rewardPool: optimism.platforms.beefyfinance.rewardPool,
    treasury: optimism.platforms.beefyfinance.treasury,
    beefyFeeBatcher: optimism.platforms.beefyfinance.beefyFeeRecipient,
    beefyFeeHarvestInterval: 12,
    stratHarvestHourInterval: parseInt(process.env.GLOBAL_MINIMUM_HARVEST_HOUR_INTERVAL) || 24,
    harvestHourInterval: process.env.OPTIMISM_HARVEST_HOUR_INTERVAL
      ? parseInt(process.env.OPTIMISM_HARVEST_HOUR_INTERVAL)
      : 1,
    wnativeUnwrapInterval: 6,
    wnativeMinToUnwrap: process.env.OPTIMISM_WNATIVE_MIN_TO_UNWRAP || '0.1',
    rpc: process.env.OPTIMISM_RPC || 'https://mainnet.optimism.io',
    appVaultsFilename: 'optimism.json',
    multicall: optimism.platforms.beefyfinance.multicall,
    queryLimit: 1000,
    queryInterval: 100,
    blockTime: 6,
    blockExplorer: 'https://optimistic.etherscan.io/',
    gas: {
      //AT: To be clear "price" is the minimum price. I got the limit default via
      //	https://www.npmjs.com/package/@eth-optimism/contracts/v/0.5.0
      limit: Number(process.env.OPTIMISM_GAS_LIMIT) || 9e6,
      price: Number(process.env.OPTIMISM_GAS_PRICE) || 1e6,
      priceCap: Number(process.env.OPTIMISM_GAS_PRICE_CAP),
    },
  },
};

module.exports = chains;
