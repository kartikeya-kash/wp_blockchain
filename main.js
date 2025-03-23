const SHA256 = reqired('crypto-js/sha256'); 
//import the lib
class Block{
    constructor(index , timestamp , data , previousHash = ''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash=this.clalculateHash();
    }

    clalculateHash(){ // to calculate the hash of the Block by taking the properties of the block
        return SHA256(this.index + this.timestamp + this.previousHash + JSON.stringify(this.data)).toString();
    }
}

class blockChain{
    constructor(){
        this.chain = [this.createGenesisBlock()]; // array of block
    }

    createGenesisBlock(){
        return new Block(0,'23/03/2025',"Genesis Block" , "0");
    }

    getLatestBlock(){ // to show the recently created block 
return this.chain[this.chain.length-1];
    }

    addBlock(newBlock){ // to add a block to chain

    }
}