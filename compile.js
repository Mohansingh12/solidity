const path =require('path');
const fs = require('fs');
const solc=require('solc');

const inboxpath=path.resolve(__dirname,'contract','contract.sol');
const source=fs.readFileSync(inboxpath,'utf8');
console.log(solc.compile(source,1));
