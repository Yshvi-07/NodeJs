const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');
//const people =require('./Routes/people');
const app =express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});
//app.use('/people',people);
app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = joi.object().keys({
        email : joi.string().trim().email().required(),
        password: joi.string().min(5).max(10).required() // validation through joi 
    });
    const { error, value } = schema.validate(req.body);  
        if(error){
           res.send("Something wrong has occured"); 
        }
        console.log(value);
        


        
    

    //database work
    res.send("Suceessfully used the data");

});
app.listen(3000);
