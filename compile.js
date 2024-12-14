// compile.js
const solc = require('solc');
const fs = require('fs');
const path = require('path');

const contractPath = path.resolve(__dirname, 'contracts', 'Ticketing.sol');
const source = fs.readFileSync(contractPath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'Ticketing.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
const contract = output.contracts['Ticketing.sol']['Ticketing'];

fs.writeFileSync(
    path.resolve(__dirname, 'build', 'Ticketing.json'),
    JSON.stringify(contract, null, 2)
);
