const fs = require('fs');
const path = require('path');

// 오류가 날 확률이 높음 : 가독성이 떨어짐 
// callback hell 


const writePath = path.join(__dirname, "datas", "writeLorem.txt");
// 쓰기 할 때는 폴더 부정확하면 err
fs.writeFile(writePath, "data 쓰기", err=>{
    console.log(err);

    console.log("1. write")
});

// 읽어와서 쓰기 // callback

const data = fs.readFile('./datas/lorem.txt', "utf-8", (err, data)=>{
    console.log("2", data);

// 기존 파일이 있으면 추가
// 없으면 만들어 추가
fs.appendFile(writePath, data , (err)=>{
    console.log(err);

    console.log("3. write");


fs.rename(
    path.join(__dirname, " datas", "writeLorem.txt"),

    path.join(__dirname, " datas", "newName.txt"),
    (err)=>
   { console.log(err);
    console.log("4. rename");


fs.appendFile(
    path.join(__dirname, 'datas', 'append.txt'),
    "append 확인",
    (err)=>{
        console.log(err);
        console.log("5.appendFile")
    }
)
}
)
}
)})

// fs.rename
// fs.appendFile 
// fs.writeFile
// fs.readFile
// fs.mkdir
// fs.rmdir
// 순차처리가 안되네 => 순차처리 => callback hell => 비동기 처리로 바꾸기

