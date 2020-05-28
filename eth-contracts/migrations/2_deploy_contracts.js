// migrating the appropriate contracts
var Mintable = artifacts.require("HouseListingToken");
var SquareVerifier = artifacts.require("SquareVerifier");
var SolnSquareVerifier = artifacts.require("SolnSquareVerifier");

module.exports = async function(deployer) {
  await deployer.deploy(Mintable);
  await deployer.deploy(SquareVerifier);
  await deployer.deploy(SolnSquareVerifier, SquareVerifier.address);
};
