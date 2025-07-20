const fs = require('fs');
const readStream = fs.createReadStream('./a.txt','utf8');
const writeStream = fs.createWriteStream('./b.txt');
readStream.on('data',(chunk)=>{
    writeStream.write(chunk);
  //console.log(chunk);
});