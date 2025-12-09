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

async function conductWithoutPromiseAll(){
    await a()
    await b()
    await c()
}

async function conduct(){
    await Promise.all([a(),b(),c()])
}

// so sanh time giua 2 cach goi ham async
//* conduct()
// console.time("conduct")
// await conduct()
// console.timeEnd("conduct")


// *conductWithoutPromiseAll()
// console.time("conductWithoutPromiseAll")
// await conductWithoutPromiseAll()
// console.timeEnd("conductWithoutPromiseAll")
