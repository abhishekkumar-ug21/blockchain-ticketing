// // const Web3 = require('web3');
// // const fs = require('fs');
// // const path = require('path');

// // // Connect to local Ethereum node
// // const web3 = new Web3('https://sepolia.infura.io/v3/d201e280ba7a4f8d89b0192067ce8eae');// Replace with your Ethereum node URL
// // // const web3 = new Web3('https://mainnet.infura.io/v3/d201e280ba7a4f8d89b0192067ce8eae');// Replace with your Ethereum node URL

// // // Load contract ABI and bytecode
// // const { abi, evm } = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'build', 'Ticketing.json')));

// // const deploy = async () => {
// //     const accounts = await web3.eth.getAccounts();
// //     const contract = new web3.eth.Contract(abi);

// //     try {
// //         const result = await contract
// //             .deploy({ data: evm.bytecode.object })
// //             .send({ from: accounts[0], gas: '1000000' });

// //         console.log('Contract deployed to:', result.options.address);
// //     } catch (error) {
// //         console.error('Error deploying contract:', error);
// //     }
// // };

// // deploy();


// const Web3 = require('web3');
// const fs = require('fs');
// const path = require('path');

// // Use your Infura URL here
// const infuraUrl = 'https://sepolia.infura.io/v3/d201e280ba7a4f8d89b0192067ce8eae'; // Replace with your Infura URL
// const web3 = new Web3(infuraUrl);

// const deploy = async () => {
//     try {
//         // Fetch accounts from Web3
//         const accounts = await web3.eth.getAccounts();
//         console.log('Deploying contract from account:', accounts[0]);

//         // Load contract ABI and bytecode
//         const { abi, evm } = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'build', 'Ticketing.json')));

//         // Create contract instance
//         const contract = new web3.eth.Contract(abi);

//         // Deploy the contract
//         const result = await contract
//             .deploy({ data: evm.bytecode.object })
//             .send({ from: accounts[0], gas: '1000000' }); // Ensure the "from" address is specified

//         console.log('Contract deployed to:', result.options.address);
//     } catch (error) {
//         console.error('Error deploying contract:', error);
//     }
// };

// deploy();



const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Use your Infura URL here
const infuraUrl = 'https://sepolia.infura.io/v3/d201e280ba7a4f8d89b0192067ce8eae'; // Replace with your Infura URL
// const infuraUrl = 'https://goerli.infura.io/v3/YOUR-PROJECT-ID'; // Replace with your Infura URL
const web3 = new Web3(infuraUrl);

const deploy = async () => {
    try {
        // Fetch accounts from Web3
        const accounts = await web3.eth.getAccounts();
        console.log('Deploying contract from account:', accounts[0]);

        // Load contract ABI and bytecode
        const { abi, evm } = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'build', 'Ticketing.json')));

        // Create contract instance
        const contract = new web3.eth.Contract(abi);

        // Deploy the contract
        const result = await contract
            .deploy({ data: evm.bytecode.object })
            .send({ from: accounts[0], gas: '1000000' }); // Ensure the "from" address is specified

        console.log('Contract deployed to:', result.options.address);
    } catch (error) {
        console.error('Error deploying contract:', error);
    }
};

deploy();
