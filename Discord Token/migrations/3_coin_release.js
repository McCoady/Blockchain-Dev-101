const CoinRelease = artifacts.require("CoinRelease");

module.exports = function (deployer) {
  const releaseAmount = 200;
  const tokenAddress = "0x96142a7834838F15aEcd5fb87D99fa810657Dd15";
  deployer.deploy(CoinRelease, releaseAmount, tokenAddress);
};
