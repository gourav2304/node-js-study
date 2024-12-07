const { log } = require('console')
const fs = require('fs');
// const { setTimeout } = require('timers/promises');

fs.readFile(__filename,()=>{
    console.log("this is readFile 1 ");
})

process.nextTick(()=>console.log("this is process.nextTick 1"));
Promise.resolve().then(()=>console.log("this is promise.resolve1"));
setTimeout(()=>console.log("this is setTimeout 1"),0);
setImmediate(()=>console.log("this is setImmediate 1"));
// for(let i =0 ; i<200000000; i++){}