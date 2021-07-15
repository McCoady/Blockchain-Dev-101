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

describe("InitialRelease", function () {

    it("Should mint 20000 tokens to InitialRelease Contract", async () => {
        const BildIt = await ethers.getContractFactory("BildIt");
        const BildItToken = await BildIt.deploy();
        const dropAmount = 200;
        const InitialRelease = await ethers.getContractFactory("InitialRelease");
        const IRContract = await InitialRelease.deploy(dropAmount, '0x5fbdb2315678afecb367f032d93f642f64180aa3');

        await BildItToken.mint(IRContract.mint, 20000);
        const contractBalance = await BildItToken.balanceOf(IRContract.address);
        expect(contractBalance == 20000);
    });


})