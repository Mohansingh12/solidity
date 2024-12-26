const path = require('path');
const fs = require('fs');
const solc = require('solc');



const helloPath = path.resolve(__dirname, 'contract', 'Inbox.sol');
const source = fs.readFileSync(helloPath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {

            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 
console.log(JSON.parse(solc.compile(JSON.stringify(input))));
module.exports=solc.compile(source,1).contracts[':Inbox'];