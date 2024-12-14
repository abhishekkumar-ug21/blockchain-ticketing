// const Web3 = require('web3');

// // Create a new instance of Web3
// const web3 = new Web3('https://sepolia.infura.io/v3/d201e280ba7a4f8d89b0192067ce8eae'); // Replace with your Ethereum node URL

// web3.eth.getBlockNumber().then(console.log).catch(console.error);
const Web3 = require('web3');

// Use your Infura URL here
const infuraUrl = 'https://sepolia.infura.io/v3/d201e280ba7a4f8d89b0192067ce8eae'; // Replace with your Infura URL
// const infuraUrl = 'https://sepolia.infura.io/v3/YOUR-PROJECT-ID'; // Replace with your Infura URL
const web3 = new Web3(infuraUrl);

web3.eth.getAccounts()
    .then(accounts => {
        console.log('Accounts:', accounts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
