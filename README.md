# Udacity Blockchain Capstone

## Introduction

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property

## Versions
* Truffle v5.1.14-nodeLTS.0 (core: 5.1.13)
* Solidity - 0.5.7 (solc-js)
* Node v10.16.0
* Web3.js v1.2.1

## Setup
* Install node packages: `npm install`
* Start Ganache

## Tests
* Go to contracts folder: `cd eth-contracts`
* Run tests: `truffle test`

## Contract Addresses on Rinkeby
* SolnSquareVerifier: [0x68e325AA8ED0B04dA8C272536d241657D3014814](https://rinkeby.etherscan.io/address/0x68e325AA8ED0B04dA8C272536d241657D3014814)
* SquareVerifier: [0x638b2e7A3BaFF6Fd9E2032d77b0c01fAA51C35E0](https://rinkeby.etherscan.io/address/0x638b2e7A3BaFF6Fd9E2032d77b0c01fAA51C35E0)
* HouseListingToken: [0x4B3A25E1413D69Aa2d9DE3844fA53727F4d2D102](https://rinkeby.etherscan.io/address/0x4B3A25E1413D69Aa2d9DE3844fA53727F4d2D102)

## Contract ABIs
* [SolnSquareVerifier.json](./eth-contracts/build/contracts/SolnSquareVerifier.json)
* [SquareVerifier.json](./eth-contracts/build/contracts/SquareVerifier.json)
* [HouseListingToken.json](./eth-contracts/build/contracts/HouseListingToken.json)

## HouseListing Token
* [0x68e325aa8ed0b04da8c272536d241657d3014814](https://rinkeby.etherscan.io/token/0x68e325aa8ed0b04da8c272536d241657d3014814)
* Total Supply: 10 HouseListingToken

## OpenSea MarketPlace Storefront 
* [HouseListingToken V2](https://rinkeby.opensea.io/assets/houselistingtoken-v2)

## OpenSea MarketPlace - Sold Items
* [https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/1](https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/1)
* [https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/3](https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/3)
* [https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/4](https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/4)
* [https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/8](https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/8)
* [https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/6](https://rinkeby.opensea.io/assets/0x68e325aa8ed0b04da8c272536d241657d3014814/6)



## Stack
* [ERC721](http://erc721.org/), [Open Zeppelin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/ERC721.sol)
* [Zokrates](https://github.com/Zokrates/ZoKrates), [Docker](https://docs.docker.com/get-docker/)
* [OpenSea](https://docs.opensea.io/docs)

## Zokrates

### Setup

1. Install docker
2. Run ZoKrates docker container:

`docker run -v PATH_TO_PROJECT/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash`

### Implement zkSnarks

1. Compile Program
Compile the program written in ZoKrates DSL
* `cd code/square`
* `~/zokrates compile -i square.cod`

2. Trusted Setup
Now take the 'flattened' code, which is a circuit and go through a 'trusted setup' Repeat this process, every-time the program.code changes Two keys are generated - 'proving.key' and 'verification.key

`~/zokrates setup`


3. Compute-Witness
Having gone through the 'trusted setup' let's compute our 'witness' who knows the answer and it generates a witness file with computation steps

`~/zokrates compute-witness -a 3 9`

4. Generate-Proof
Next step is to 'generate our proof' based on the above 'witness' A proof.json file is generated in this step

`~/zokrates generate-proof`

5. Export-Verifier

Last but never the least, let's generate our 'verifier' smart contract

`~/zokrates export-verifier`



  

## Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
