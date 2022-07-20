import fetch from "node-fetch";

const apiUrl= 'https://swapi.dev/api'

async function pegaPessoas(pagina=1){

    const resposta = await fetch (`${apiUrl}/people?page=${pagina}`)
    const pessoas = await resposta.json();

    return pessoas.results

 }
 export {pegaPessoas}