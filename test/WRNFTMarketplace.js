const { expect } = require("chai");

describe("DEPLOY", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContract() {
    const [owner, wallet1] = await ethers.getSigners()
    const Marketplace = await ethers.getContractFactory("WRNFTMarketplace")
    const contract = await Marketplace.deploy()
    console.log('Deployed to' + contract.address)
    return { owner, contract, wallet1 }
}

describe("Admin module", async () => {
  it('Should deploy the contract', async function () {
      const { contract } = await deployContract()
      expect(contract.address).to.not.equal(null)
  })

  it('Should revert not owner trying to update listing price', async function () {
      const { contract } = await deployContract()
      await expect(contract.updateListingPrice(5000)).to.be.revertedWith("Only owner oft the marketplace can change the listing price!")
  })

  it('Should update listing price', async function () {
      const { contract, owner } = await deployContract()
      await contract.connect(owner).updateListingPrice(5000)
      expect(await contract.getListingPrice()).to.equal(5000)
  })

  it('Should get listing price', async () => {
      const { contract } = await deployContract()
      const listingPrice = await contract.getListingPrice()
      expect(listingPrice).to.equal(1500000000000000);
  })

  it('Should create a token', async () => {
      const { contract, wallet1 } = await deployContract()
      const listingPrice = 1500000000000000
      await contract.connect(wallet1).createToken('tokenuri', listingPrice, { value: listingPrice })
      const newTokenId = await contract._tokenIds()
      expect(newTokenId).to.equal(1);
  })
});

});
