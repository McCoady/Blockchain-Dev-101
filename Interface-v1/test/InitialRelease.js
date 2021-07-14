const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("InitialRelease", function () {

    it('Should allow users to join coin release', async () => {
        const [owner] = await ethers.getSigners();

        const BildIt = await ethers.getContractFactory("BildIt");
        const BildItToken = await BildIt.deploy();

        const InitialRelease = await ethers.getContractFactory("InitialRelease");
        const InitialReleaseContract = await InitialRelease.deploy(200, BildItToken.address);

        await BildItToken.mint(InitialReleaseContract.address, 2000);

        await InitialReleaseContract.joinDrop({ from: owner });
        const noParticipants = await InitialRelease.noParticipants();
        expect(noParticipants == 1);
    })
})