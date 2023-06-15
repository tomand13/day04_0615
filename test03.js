const fs = require('fs');

const path = require('path');

const data = fs.readFile('./datas/lorem.txt', (err, data)=>{
    if(err) consolog.error(err);

    console.log(data); //<Buffer 6c 6f 72 65 6d 2e 74 78 74>
    console.log(data.toString()); //lorem.txt
})

fs.readFile('./datas/lorem.txt', 'utf-8', (err, data)=>{
    if(err) consolog.error(err);
    
    console.log(data); //<Buffer 6c 6f 72 65 6d 2e 74 78 74>
    
})

console.log('콘솔 제일 먼저 처리')
console.log(data);

