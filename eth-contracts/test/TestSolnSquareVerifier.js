
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
        // You can also add a test here showing that repeat proofs will expectedly revert the transaction.

        /* Alternative with Event Assertion:
        https://www.trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts#processing-transaction-results

        let hash = await this.contract.getHashForSolution.call(proof.a, proof.b, proof.c, inputs);
        let result = await this.contract.addSolution(tokenId1, accounts[1], hash);

        let solutionAddedEmitted = false;

        let logs = result.logs;

        logs.forEach(log => {
            if (log.event == "SolutionAdded") {
                solutionAddedEmitted = true;
            }
        })

        assert.equal(solutionAddedEmitted,true, "SolutionAdded was not emitted");
        */

    })

    // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
    it('can mint token', async function () {
        let minted = await this.contract.mintToken.call(accounts[2], tokenId2, proof.a, proof.b, proof.c, inputs);
        assert.isTrue(minted, "Cannot mint token");
        // Another way to do this is to mint a token (i.e. without .call()) then assert that the owner of the token is indeed accounts[2]. You can do that with the ownerOf() method of ERC721.
    })

});

})

