const {
    expectevert,
    time,
    constants
} = require('@openzeppelin/test-helpers');
const { assert } = require('console');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
const CoinRelease = artifacts.require('CoinRelease');
const Discoin = artifacts.require('Discoin');

contract('CoinRelease', async () => {

    let coinrelease = null;
    before(async () => {
        coinrelease = await CoinRelease.deployed();
        discoin = await Discoin.deployed();
        accounts = await web3.eth.getAccounts();
    });

    it('Should allow users to join coin release.', async () => {
        for (i = 0; i <= 9; i++) {
            require(await coinrelease.joinDrop({ from: accounts[i] }) == true, 'Transaction Failed');
        }
        const noParticipants = await coinrelease.noParticipants();
        assert(noParticipants.toNumber() === 10);
    });

    it('Should not allow users to join twice', async () => {
        try {
            await coinrelease.joinDrop({ from: accounts[1] });
        } catch (e) {
            assert(e.message.includes("Address already joined drop."));
            return;
        }
        assert(false);
    });

});
