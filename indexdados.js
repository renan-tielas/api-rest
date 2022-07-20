// aula for in for of

import { pegaPessoas } from "./StarWarsService.js";


async function main(){
    const pessoasStarWars = await pegaPessoas(1);
    console.log (pessoasStarWars)

for(let i=0; i<pessoasStarWars.length();i++){
console.log(pessoasStarWars[i].name)
// TRABALHAR O USO DE DADOS,
// LEITURA SÓ DE NOMES ETC
}

 }
main ()