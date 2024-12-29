
const path = require('path');
const fs = require('fs');
const solc = require('solc');

// Path to the contract file
const helloPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(helloPath, 'UTF-8');

// Compile the contract
const input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode']
            }
        }
    }
};

// Compile and log output

module.exports=solc.compile(JSON.stringify(input)).contract[':Inbox']