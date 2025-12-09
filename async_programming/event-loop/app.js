// console.log("running")
import fs from 'fs/promises';
 async function a(){
    await fs.readFile('../doc.txt','utf-8')
}
 async function b(){
    await fs.readFile('../doc.txt','utf-8')
}
 async function c(){
    await fs.readFile('../doc.txt','utf-8')
}

async function excutingWithoutPromiseAll(){
    await a()
    await b()
    await c()
}

async function excuting(){
    await Promise.all([a(),b(),c()])
}

// so sanh time giua 2 cach goi ham async
//* excuting()
// console.time("excuting")
// await excuting()
// console.timeEnd("excuting")


// *excutingWithoutPromiseAll()
// console.time("excutingWithoutPromiseAll")
// await excutingWithoutPromiseAll()
// console.timeEnd("excutingWithoutPromiseAll")

// !call back timer se dc goi sau toi thieu 1 giay sau khi dang ky
async function test(){
    try{
        console.log("no content")
    }
    catch(e){
        console.log(e)
    }
}

// test()

// setTimeout(() => {
//     console.log("call callback")
// }, 1000)
