# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

* [zkSnarks](https://blog.ethereum.org/2016/12/05/zksnarks-in-a-nutshell/)

You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property

## Versions

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
