var MineToken = artifacts.require("./MineToken.sol");
var Bank = artifacts.require("./Bank.sol");

module.exports = async function (deployer) {
  await deployer.deploy(MineToken, "1000000000000000000000000");
  const mineTokenInstance = await MineToken.deployed()

  await deployer.deploy(Bank, mineTokenInstance.address);
};
