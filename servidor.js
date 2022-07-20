import express from 'express'
import { STATUS_CODES } from 'http';


const app = express();

const PORT = process.env.PORT || 3000;

let usuarios = [

    {id:1, nome: 'pedro', idade: 3},
    {id:2, nome: 'vilso', idade: 45},
]

app.use(express.json())

app.listen(PORT, ()=>{

    console.log(`Servidor rodando na porta ${PORT} EM http://localhost:${PORT}`)
})




// PEGA ??
app.get('/', (request, response)=>{

    return response.send('<h1>trabalhando com servidor express</h1>')
})


// PEGA TODOS
app.get('/usuarios', (request, response)=>{

    return response.send(usuarios)
})


// PEGA UM
app.get('/usuarios/:usuarioId', (request, response)=>{
    const usuarioId = request.params.usuarioId;
const usuario = usuarios.find(usuario=>{
    return (usuario.id === Number( usuarioId))

})
    return response.send(usuario)
})



// CRIA UM

app.post('/usuarios', (request, response)=>{
// fazer checagem de campos de entrada
 const novoUsuario = request.body
usuarios.push(novoUsuario);
return response.status(200).send(novoUsuario)
})


// ATUALIZA UM ///

app.put('/usuarios', (request, response)=>{

    
    const usuarioAtualizado = request.body
    const indiceUsuarioAntigo = usuarios.findIndex(usuario=>(usuarioAtualizado.id===Number(usuario.id)))
    usuarios[indiceUsuarioAntigo] = usuarioAtualizado

// OU

    //   usuarios = usuarios.map(usuario=>{
    //         if (usuario.id === Number(idReq)){ return  usuarioAtualizado}
    //         return usuario
    //     })  

    return response.status(201).send(usuarios)
    })




// ATUALIZA PARCIALMENTE UM  ///

app.patch('/usuarios', (request, response)=>{

    
    // const usuarioAtualizado = request.body
    const {id,nome,idade} = request.body
    const indiceUsuarioAntigo = usuarios.findIndex(usuario=>(id===Number(usuario.id)))
    usuarios[indiceUsuarioAntigo].nome = nome;

// OU desatualizado

    //   usuarios = usuarios.map(usuario=>{
    //         if (usuario.id === Number(idReq)){ return  usuarioAtualizado}
    //         return usuario
    //     })  

    return response.status(201).send(usuarios)
    })



// DELETA UM

app.delete('/usuarios', (request, response)=>{
    // fazer checagem de campos de entrada
    const idReq = request.body.id
    const indiceUsuarioAntigo = usuarios.findIndex(usuario=>(idReq===Number(usuario.id)))
    usuarios[indiceUsuarioAntigo] = usuarios.filter(usuario=>(usuario.id==!idReq))

    return response.status(204).send('deletadinho')
    })