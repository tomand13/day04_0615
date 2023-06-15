const fs = require('fs');

const path = require('path');



const data = fs.readFileSync('./datas/lorem.txt', 'utf-8',
err=>console.log(err))

console.log("1.", data);
console.log('2. 처리')


