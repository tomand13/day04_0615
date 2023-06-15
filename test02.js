const fs = require('fs');

const path = require('path');

// // fs.readFile('./datas/lorem.txt', (err, data)=>{
// //     if(err) consolog.error(err);

// //     console.log(data); //<Buffer 6c 6f 72 65 6d 2e 74 78 74>
// //     console.log(data.toString()); //lorem.txt
// // })

// // fs.readFile('./datas/lorem.txt', 'utf-8', (err, data)=>{
// //     if(err) consolog.error(err);
    
// //     console.log(data); //<Buffer 6c 6f 72 65 6d 2e 74 78 74>
    
// // })

// const readPath = path.join(__dirname + 'datas' + 'lorem.txt')
// console.log(readPath);

// rmSync.readFile(readPath, 'utf-8', (err, data)=>{
//     if(err)consolog.error(err);

//     console.log(data);
// })

// const readJson = path.join(__dirname + 'datas' + 'user.json')


// rmSync.readFile(readJson,  (err, data)=>{
//     if(err)consolog.error(err);

//     console.log(data); // Buffer
//     console.log(data.toString()); // 문자열 그대로 읽기
    
//     const user = JSON.parse(data);
//     console.log(JSON.parse(user)); // js Object
//     console.log(JSON.parse(user.first_name)); // js Object

//     const{ first_name, last_name} = JSON.parse(data);
//     console.log(first_name, last_name);
// })

const user = require('./datas/user.json');
console.log(user)

// node.js : 코드 순서대로 처리된다는 보장이 없다.
// 싱글쓰레드 : 한번에 하나의 코드만 실행됨
// 처리 => 처리 : 느려요
// 처리 순서가 달라지고 , data 읽기 완료 후 처리하면 문제 발생 
// 비동기 처리 : 순차처리 되도록 해주고 완료시키고