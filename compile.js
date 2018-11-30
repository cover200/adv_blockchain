const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname,'contracts','Shop.sol'); //ชื่อไฟล์
const source = fs.readFileSync(inboxPath,'utf8');


module.exports = solc.compile(source, 1).contracts[':Shop'];   //ชื่อ contract