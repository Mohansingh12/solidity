const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "utf8");




// Path to the contract file
const input = {
    language: 'Solidity',
    sources: {
      'YourContract.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };
  
      // Compile the contract
    module.exports=solc.compile(JSON.stringify(input));
  