# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

* [zkSnarks](https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/)

You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property

## Versions


## Contracts on Rinkeby
* SolnSquareVerifier: [0x3c5202f10C3A4C6A3801a19F647f569D6eC73d13](https://rinkeby.etherscan.io/address/0x3c5202f10C3A4C6A3801a19F647f569D6eC73d13)
* SquareVerifier: [0xFeD7052ee8693D6b8cFaC4b3b70bb8DBbD5FeB8A](https://rinkeby.etherscan.io/address/0xFeD7052ee8693D6b8cFaC4b3b70bb8DBbD5FeB8A)
* HouseListingToken: [0xAAEC87a157e6fF49a4E532df0E0c23571ca90ee4](https://rinkeby.etherscan.io/address/0xaaec87a157e6ff49a4e532df0e0c23571ca90ee4)

## ABIs
* [SolnSquareVerifier.json](./eth-contracts/build/contracts/SolnSquareVerifier.json)
* [SquareVerifier.json](./eth-contracts/build/contracts/SquareVerifier.json)
* [HouseListingToken.json](./eth-contracts/build/contracts/HouseListingToken.json)


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
