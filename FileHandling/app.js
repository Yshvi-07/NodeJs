const fs = require('fs');
/*fs.writeFile('DemoFile','This is how we create a file through coding', err=>{
    if(err){
        console.log(err);
    }else{
        console.log("File craeted Succesfully");
        fs.readFile('DemoFile','Utf8',(err,file)=>{
            if(err){
                console.log(err);
            }else{
                console.log(file);
            }
        });
    }
}); -----------------------------------------------------      reading and creating  a file in FileHandling 
fs.rename('DemoFile','FileDemo',err=>{
    if(err){
        console.log(err)
    }else{
        console.log("File is renamed");
    }
}); -----------------------------------------------------     Renaming a file in File Handling 
fs.appendFile("FileDemo",' Appending some context here',err=>{
    if(err){
        console.log(err);
    }else{
        console.log('New content added');
    }
});  ----------------------------------------------------      Appending some context in file */
fs.unlink('FileDemo',err=>{
    if(err)
        console.log(err);
    else{
        console.log("Files got deleted");
    }
});
