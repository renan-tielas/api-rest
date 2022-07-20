import fs from 'fs'
import {promisify} from 'util'


const readFilePromise = promisify(fs.readFile)
let listagem;

readFilePromise('./lista.json' ).then((dados)=>{
    listagem = JSON.parse(dados)
        console.log('lista é', listagem)
}).catch((error)=>{
    console.log(error)
})




// fs.readFile('./lista.json',(erro,dados)=>{
//     if(erro){
//         console.error(erro)
//         return
//     }
//     listagem = JSON.parse(dados)
//     console.log('lista é', listagem)
// });

