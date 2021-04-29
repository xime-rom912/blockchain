const SHA256 = require('crypto-js/sha256');

class Block {
 //index = identificador de la posicion en la cadena.
 // Data =  El contenido del bloque
 // previousHash = VAlor bloque anterior de la cadena
 constructor(index, data, previousHash=''){
  this.index = index;
  this.data = data;
  this.previousHash = previousHash;
  this.date = new Date();
  this.nonce = 0;
  this.hash = this.createdHash();
 }

 createdHash(){
  return SHA256(`${this.index} ${this.data} ${this.date} ${this.nonce}`).toString();
 }
 //inicie con cero el hash
 mine(difficulty){
  while(!this.hash.startsWith(difficulty)){
   this.nonce++;
   this.hash = this.createdHash();
  }
 }
 //0

 //Cifrado
 //Simetricoy Asimetrico

 //a SHA256 = x
 //a SHA256= x

 //NPM = Node Packafe Manager
 //YARN
}
module.exports = Block;
