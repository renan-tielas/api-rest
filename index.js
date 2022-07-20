function mensagemRenan() {

    const promiseMensagem = new Promise ( ( resolve,reject)=>{
        setTimeout( ()=>{
            console.log('uhuul')
            resolve()
        }, 0);
       
    })

return promiseMensagem
}

function mensagemLuisa() {

        console.log('uhuul2')
}
 mensagemRenan().then(mensagemLuisa)
//  mensagemLuisa()
