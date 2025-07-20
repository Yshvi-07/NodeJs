const fs = require('fs');
/*fs.mkdir('example',(err)=>{
  if(err){
    console.log(err);
  }else{
    //console.log('Created the folder Successfully');
    fs.rmdir('example',err=>{
    if(err){
        console.log(err);
    }else{
    console.log('Deleted the folder Successfully');
  }
});
  }
}); --------------------------------------------------- Deleting a file successfully
fs.mkdir('DemoF',(err)=>{
    if(err){
        console.log(err);
    }else{
        fs.writeFile('./DemoF/DemoFile','Created Demo file',(err)=>{
            if(err){
                console.log(err);
            }else{
                console.log("file created inside a folder successfully");
            }
        });

    }
}) --------------------------------------------------- Creating a folder Successfully 

fs.readdir('./Example',(err,files)=>{
    if(err){
        console.log(err);
    }else{
        //console.log(files);
        for(let file of files){
            fs.unlink('./Example/'+ file,(err)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log("File is deleted");
                }
            })
        }
    }
}); -------------------------------------------------- Deleting file from folder */
