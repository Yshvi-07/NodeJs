const http =require('http');
const fs =require('fs');
const server = http.createServer((req,res)=>{
    const readStream = fs.createReadStream('index.html');
    res.writeHead(200,{'Content-type':'text/html'});
    readStream.pipe(res);


}).listen('3000');

