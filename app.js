// const os = require('os')
// // const user = os.userInfo()
// // console.log(user)
// console.log(`hi there ${os.uptime()} seconds`)

// const currentOS = {
//     name: os.type(),
//     release: os.release(),


// }
// console.log(currentOS)


// const {readFileSync,writeFileSync} =require('fs')
// const first=readFileSync('./content/first.txt','utf8')
// const sec=readFileSync('./content/sec.txt','utf8')
// console.log(first,sec)
// writeFileSync('./content/third.txt',`here is the result ${first},${sec}`,{flag:'a'})



// // const {readFileSync,writeFileSync} =require('fs')
// // readfi
// const fs =require('fs')
// console.log(fs.readFileSync('./content/first.txt','utf8'))

// const {readFile,writeFile}=require('fs')
// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//        return 
//     }
//    const first = result;
//    readFile('./content/sec.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err)
//        return 
//     }
//    const sec = result;
//    writeFile('./content/resultasync.txt',`here is my result ${first},${sec}`
   
   
   
   
   
//    ,(err,result)=>{
//    if(err){
//    console.log(err)
//    }
//    console.log(result)

//    }
//    )



// })})
// const l=require('./5-name')
// const a='mohan'
// console.log(l(a))
const _ = require('lodash')
const items=[1,[2,[3,[4]]]]
const newitems=_.flattenDeep(items)
console.log(newitems)