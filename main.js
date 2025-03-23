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