
var SquareVerifier = artifacts.require('SquareVerifier');
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');

const { proof, inputs } = require('./proof.json')

contract('SolnSquareVerifier', accounts => {

describe('SolnSquareVerifier', function () {

    const tokenId1 = 1;
    const tokenId2 = 2;

    beforeEach(async function () {
        const verifier = await SquareVerifier.new({ from: accounts[0] })
        this.contract = await SolnSquareVerifier.new(verifier.address,{ from: accounts[0] });
    });

    // Test if a new solution can be added for contract - SolnSquareVerifier
    it('can add new solution', async function () {
        let hash = await this.contract.getHashForSolution.call(proof.a, proof.b, proof.c, inputs);
        await this.contract.addSolution(tokenId1, accounts[1], hash);
        let count = await this.contract.getSolutionsCount();
        assert.equal(count, 1, "Cannot add new solution");
    })

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('can mint token', async function () {
        let minted = await this.contract.mintToken.call(accounts[2], tokenId2, proof.a, proof.b, proof.c, inputs);
        assert.isTrue(minted, "Cannot mint token");
    })

});

})

