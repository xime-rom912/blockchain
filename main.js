const Block = require('./block');
const BlockChain = require('./blockchain');

const blockchain =  new BlockChain("Data una nueva moneda");
blockchain.addBlock('Data de segundo bloque');
blockchain.addBlock('Data de tercer bloque');

console.log(blockchain);
