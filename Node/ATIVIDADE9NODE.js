// 9) Escreva uma função que receba um array de strings e retorne um novo
// array com todas as strings em letras minúsculas.
function FraseMaiuscula(lista) {
    let minusculo = []; 
    for (let i = 0; i < lista.length; i++) {
        minusculo.push(lista[i].toLowerCase());
        //console.log("iteração numero: "+i);
    }
    return minusculo;
}

let lista = ["TESTE", "EXEMPLO", "PALAVRA"];
let resultado = FraseMaiuscula(lista);
console.log(resultado);
