const fs = require('node:fs')
console.log("first");

const fileContent = fs.readFileSync("./file.txt","utf-8");// here synchrous
console.log(fileContent);

console.log("second");

fs.readFile('./file.txt',"utf-8" ,(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})

console.log("third");

fs.writeFileSync("./greet.js","Hello world!");

fs.writeFile("./greet.js"," Hello environment",{flag: "a"} , (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File written")
    }
});
