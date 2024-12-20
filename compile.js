const path =require('path');
const fs = require('fs');
const solc=require('solc');

const inboxpath=path.resolve(__dirname,'contract','Inbox.sol');
const source=fs.readFileSync(inboxpath,'utf8');
console.log(solc.compile(source,1));

const input = {
    language: 'Solidity',
    sources: {
      'Inbox.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['abi', 'evm.bytecode'],
        },
      },
    },
  };
  
  try {
    const output = JSON.parse(solc.compile(JSON.stringify(input)));
  
    module.exports = output.contracts['Inbox.sol'];
  } catch (err) {
    console.error('Compilation failed:', err);
  }