const Discoin = artifacts.require('Discoin');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));

contract('Discoin', async () => {
    let discoin = null;


    before(async () => {
        discoin = await Discoin.deployed();
        accounts = await web3.eth.getAccounts();
    });

    it('Should mint 1000 coins', async () => {
        await discoin.mint(accounts[0], 1000);
        const totalsupply = await discoin.totalSupply();
        assert(totalsupply.toNumber() === 1000);
    });

    it('Should transfer 200 coins to address[1]', async () => {
        await discoin.transfer(accounts[1], 200);
        const balance = await discoin.balanceOf(accounts[1]);
        assert(balance.toNumber() === 200);
    });

});