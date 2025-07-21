const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello world from Express");
}).listen(3000);
app.get('/example',(req,res)=>{
    res.send("Hello world from route params ");
}); // --------------------------------------------------------------> Using Route Parameters


app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);  // -------------------------------------->   using Query String
    res.send("Route Params are shown here");
});// --------------------------------------------------------------> Using Route Parameters
