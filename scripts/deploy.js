const hre = require("hardhat");

async function main() {
  const WRNFTMarketplace = await hre.ethers.getContractFactory("WRNFTMarketplace");
  const wrNFTMarketplace = await WRNFTMarketplace.deploy();
//   await wrNFTMarketplace.deployed();
  console.log(`wrNFTMarketplace deployed to ${await wrNFTMarketplace.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
