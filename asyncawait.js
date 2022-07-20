import fetch from "node-fetch";


async function main() {
   
    const usuario = 'renan-tielas';
    const usuario2='rprrafa'
    const api = 'https://api.github.com'

    // metodo antigo promise
    // fetch(`${api}/users/${usuario}`)
    // .then((response) => {
    //     return response.json();
    // }).then((user) => {
    //     console.log(user)
    // })
// const response = await fetch(`${api}/users/${usuario}`) REQUESTS NAO PARALELAS
// const response2 = await fetch(`${api}/users/${usuario2}`)

const promise =  fetch(`${api}/users/${usuario}`)
const promise2 = fetch(`${api}/users/${usuario2}`)
const promises =await Promise.all([promise,promise2]); // Requests em paralelo!!

const usuarioo = await promises[0].json()
const usuarioo2 = await promises[1].json()
console.log(usuarioo.name)
console.log(usuarioo2.name)
}

main();