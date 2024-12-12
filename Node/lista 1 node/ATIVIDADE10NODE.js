// 10) Escreva uma função que receba um número como argumento e
// retorne um array contendo todos os divisores desse número.
function encontrarDivisores(numero) {
    let divisores = [];
    for (let i = 1; i <= Math.abs(numero); i++) { // Itera até o valor absoluto do número
        if (numero % i === 0) { // Verifica se i é divisor do número
            divisores.push(i);
        }
    }
    return divisores;
}
let numero = 24;
let resultado = encontrarDivisores(numero);
console.log(resultado);


