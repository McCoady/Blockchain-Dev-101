const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("BildIt Contract", function () {

    it("Should mint 1000 tokens", async () => {
        const [owner] = await ethers.getSigners();

        const BildIt = await ethers.getContractFactory("BildIt");

        const BildItToken = await BildIt.deploy();

        await BildItToken.mint(owner.address, 1000);

        const ownerBalance = await BildItToken.balanceOf(owner.address);
        expect(ownerBalance == 1000);

    })
})