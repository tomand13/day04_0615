// 비동기처리는 async
// try{}catch()finally{}

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOptions = async()=>{
    try{
        const data = await fsPromises.readFile('./datas/lorem.txt', "utf-8");
        console.log("1. readFile : ", data);
        console.log("2. console.log");

        await fsPromises.writeFile("./datas/newWrite.txt", data);
        console.log('3. write complete');

        await fsPromises.appendFile("./datas/newWrite.txt", "append txt");
        console.log('4. appendFile');

        await fsPromises.rename( "./datas/newWrite.txt", "./datas/rename.txt", err=> console.log(err));
        console.log('5. rename')

        if( !fs.existsSync("./model")){
            fs.mkdir('./model', err=>console.log(err));
        }
        console.log('6. mkdir');
        // fs.Promises.readdir('./', (err, filelist)=>{
        //     console.log(filelist)
        // })
        const filelist = await fsPromises.readdir('./', err=>{if(err) throw err});
        console.log("7.",  filelist);

        await fsPromises.unlink(path.join(__dirname, "datas", "rename.txt"));
        console.log(err);
    }catch(err){
        console.log(err);
    }finally{
        //try 코드에서 에러 없이도 반드시
        //catch 구문이 실행되도 반드시 처리
        console.log("finally 반드시 실행");
        // db.close
    }
}
fileOptions();