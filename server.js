const crypto=require('crypto');
const hash=crypto.createHash('sha256');
hash.update('janu2003')
console.log(hash.digest('hex'));