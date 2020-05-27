var ERC721MintableComplete = artifacts.require('HouseListingToken');

contract('HouseListingToken', accounts => {

    const owner = accounts[0];
    const tokenIds = [...Array(5).keys()];

    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({ from: owner });

            // TODO: mint multiple tokens
            tokenIds.forEach(async (token) => await this.contract.mint(accounts[token], token));
        });

        it('should return total supply', async function () {
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, tokenIds.length, "Does not return total correct supply");
        })

        it('should get token balance', async function () {
            let balance1 = await this.contract.balanceOf(accounts[1]);
            assert.equal(balance1, 1, "Does not return token balance of account #1");
            let balance5 = await this.contract.balanceOf(accounts[5]);
            assert.equal(balance5, 0, "Does not return token balance of account #5");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let tokenId = tokenIds[1];
            let tokenURI = await this.contract.tokenURI(tokenId);
            let baseTokenURI = await this.contract.getBaseTokenURI();
            assert.equal(baseTokenURI, 'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/', 'Base token URI is not correct');
            assert.equal(tokenURI, baseTokenURI + tokenId, 'Base token URI is not correct');
        })

        it('should transfer token from one owner to another', async function () {
            let tokenId = tokenIds[1];
            await this.contract.transferFrom(accounts[1], accounts[2], tokenId, {from: accounts[1]});
            let balance1 = await this.contract.balanceOf(accounts[1]);
            let balance2 = await this.contract.balanceOf(accounts[2]);
            let newTokenOwner  = await this.contract.ownerOf(tokenId);
            assert.equal(newTokenOwner, accounts[2], "Account2 is still not owner");
            assert.notEqual(newTokenOwner, accounts[1], "Account1 is still owner");
            assert.equal(balance1, 0, "Account1 has wrong balance");
            assert.equal(balance2, 2, "Account2 has wrong balance");

        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new({ from: owner });
        })

        it('should fail when minting when address is not contract owner', async function () {

            let failed = false;
            try {
                await this.contract.mint(accounts[1], tokenIds[0], {from: accounts[1]});
            } catch (e) {
                failed = true;
            }                    

            assert.isTrue(failed, "Illegal minting does not fail");

        })

        it('should return contract owner', async function () {
            let contractOwner = await this.contract.getOwner();
            assert.equal(owner, contractOwner, "Does not return contract owner");

        })

    });
})