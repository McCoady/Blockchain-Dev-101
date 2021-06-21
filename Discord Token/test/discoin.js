const Discoin = artifacts.require('Discoin');

contract('Discoin', async () => {
    let discoin = null;
    before(async () => {
        discoin = await Discoin.deployed();

    });

    it('Should mint 1000 coins', async () => {
        await discoin.mint("0xddf9A1666ABb8892173F7f00782925ef72c9a2B0", 1000);
        const totalsupply = await discoin.totalSupply();
        assert(totalsupply.toNumber() === 1000);
    });

    it('Should transfer 200 coins to address[1]', async () => {
        await discoin.transfer('0x5fBE3d36A63bcfb87C49D48834353e8B94f96999', 200);
        const balance = await discoin.balanceOf('0x5fBE3d36A63bcfb87C49D48834353e8B94f96999');
        assert(balance.toNumber() === 200);
    });

});