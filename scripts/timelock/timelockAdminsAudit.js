const ethers = require('ethers');
const { addressBook } = require('blockchain-addressbook');

const chains = require('../../data/chains');
const chainIdFromName = require('../../utils/chainIdFromName');
const TimelockAbi = require('../../abis/TimelockController.json');

const outdatedAdmins = [
  '0x10aee6B5594942433e7Fc2783598c979B030eF3D',
  '0xd529b1894491a0a26B18939274ae8ede93E81dbA',
  '0x4E2a43a0Bf6480ee8359b7eAE244A9fBe9862Cdf',
];

const hwWhenNoMultisig = '0x3Eb7fB70C03eC4AEEC97C6C6C1B59B014600b7F7';

const executorRole = {
  hash: '0xd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63',
  name: 'executor',
};

const proposerRole = {
  hash: '0xb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1',
  name: 'proposer',
};

const main = async () => {
  for (const [chainName, chain] of Object.entries(addressBook)) {
    let attempts = 0;
    let MAX_ATTEMPTS = 3;

    try {
      await auditChain(chainName, chain);
    } catch (e) {
      if (attempts < MAX_ATTEMPTS) {
        console.log(`Can't audit ${chainName} due to ${e}. Trying again.`);
        attempts++;
        await auditChain(chainName, chain);
      } else {
        console.log(
          `Can't audit ${chainName} due to ${e}. Max attempts tried. Moving on to the next chain.`
        );
      }
    }
  }
};

const auditChain = async (chainName, chain) => {
  console.log(`===== Reviewing chain ${chainName} timelock admins. =====`);

  const chainId = chainIdFromName(chainName);
  const provider = new ethers.providers.JsonRpcProvider(chains[chainId].rpc);
  const { strategyOwner, vaultOwner, devMultisig, treasuryMultisig, keeper, launchpoolOwner } =
    chain.platforms.beefyfinance;
  const outdatedAccounts = outdatedAdmins;
  const proposers = [launchpoolOwner];
  const executors = [launchpoolOwner, keeper];

  // Review if multisigs are present and add trusted hw as outdated.
  if (
    devMultisig !== ethers.constants.AddressZero &&
    treasuryMultisig !== ethers.constants.AddressZero
  ) {
    outdatedAccounts.push(hwWhenNoMultisig);
  }

  for (const timelockAddress of [vaultOwner, strategyOwner]) {
    const timelock = new ethers.Contract(timelockAddress, TimelockAbi, provider);
    let dataList = [];
    let updates = [];
    let scheduleDelay = timelockAddress === vaultOwner ? 0 : 21600;

    [dataList, updates] = await grantRole(timelock, proposers, proposerRole, dataList, updates);
    [dataList, updates] = await grantRole(timelock, executors, executorRole, dataList, updates);
    [dataList, updates] = await revokeRole(
      timelock,
      outdatedAccounts,
      proposerRole,
      dataList,
      updates
    );
    [dataList, updates] = await revokeRole(
      timelock,
      outdatedAccounts,
      executorRole,
      dataList,
      updates
    );

    await printTxs(dataList, timelock, chainName, scheduleDelay, updates);
  }

  console.log(`Chain ${chainName} done. \n\n`);
};

const grantRole = async (timelock, accounts, role, dataList, updates) => {
  let newDataList = [...dataList];
  let newUpdates = [...updates];

  for (const account of accounts) {
    let hasRole = await timelock.hasRole(role.hash, account);

    if (!hasRole) {
      newUpdates.push(
        `Should grant ${role.name} role to ${account} in timelock ${timelock.address}`
      );

      const timelockInterface = new ethers.utils.Interface(TimelockAbi);
      let data = timelockInterface.encodeFunctionData('grantRole', [role.hash, account]);
      newDataList.push(data);
    }
  }

  return [newDataList, newUpdates];
};

const revokeRole = async (timelock, accounts, role, dataList, updates) => {
  let newDataList = [...dataList];
  let newUpdates = [...updates];

  for (const account of accounts) {
    let hasRole = await timelock.hasRole(role.hash, account);

    if (hasRole) {
      newUpdates.push(
        `Should revoke ${role.name} role from ${account} in timelock ${timelock.address}`
      );

      const timelockInterface = new ethers.utils.Interface(TimelockAbi);
      let data = timelockInterface.encodeFunctionData('revokeRole', [role.hash, account]);
      newDataList.push(data);
    }
  }

  return [newDataList, newUpdates];
};

const printTxs = async (dataList, timelock, chainName, scheduleDelay, updates) => {
  if (updates.length === 0) {
    console.log(`No updates needed in timelock ${timelock.address} on ${chainName} \n`);
    return;
  }

  updates.forEach(update => console.log(update));
  console.log('\n');

  const targets = Array.from({ length: dataList.length }, () => timelock.address);
  const values = Array.from({ length: dataList.length }, () => 0);
  const predecessor = ethers.constants.HashZero;
  const salt = ethers.constants.HashZero;

  const operationHash = await timelock.hashOperationBatch(
    targets,
    values,
    dataList,
    predecessor,
    salt
  );

  const isOperation = await timelock.isOperation(operationHash);
  if (isOperation) {
    const isOperationReady = await timelock.isOperationReady(operationHash);
    if (isOperationReady) {
      console.log('\n');
      console.log(`Should execute batch tx in timelock ${timelock.address} on ${chainName}`);
      console.log(`Targets: ${JSON.stringify(targets)}`);
      console.log(`Values: ${JSON.stringify(values)}`);
      console.log(`Data: ${JSON.stringify(dataList)}`);
      console.log(`Predecessor: ${predecessor}`);
      console.log(`Salt: ${salt}`);
      console.log('\n');
    } else {
      console.log(`Operation for ${timelock.address} in ${chainName} exists but is not ready. \n`);
    }
  } else {
    console.log('\n');
    console.log(`Should schedule batch tx in timelock ${timelock.address} on ${chainName}`);
    console.log(`Targets: ${JSON.stringify(targets)}`);
    console.log(`Values: ${JSON.stringify(values)}`);
    console.log(`Data: ${JSON.stringify(dataList)}`);
    console.log(`Predecessor: ${predecessor}`);
    console.log(`Salt: ${salt}`);
    console.log(`Min Delay: ${scheduleDelay}`);
    console.log('\n');
  }
};

main();
