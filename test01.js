const fs = require('fs');

if(!fs.existsSync())
fs.mkdir('myfolder', (err)=>console.log(err))

if(fs.existsSync('myfolder')){
    fs.rmdir('myfolder',err=>console.log(err))
}