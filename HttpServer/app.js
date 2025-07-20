const http = require('http');
const server = http.createServer((req,res)=>{
   // res.write('Hello world without if else condition');
    //res.end();
    if(req.url ==='/'){
        res.write('Printed from if else ');
        res.end();
    }else{
        res.write('Using other ports');
        res.end();
    }
});
server.listen('3000');