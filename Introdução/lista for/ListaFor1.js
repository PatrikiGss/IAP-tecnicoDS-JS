// 1) Crie um programa que peça para o usuário digitar 5 valores inteiros e
// os armazene em um vetor. O programa deve mostrar o resultado da
// soma dos elementos do vetor.
function calcularSoma() {

    let vetor = [];
    let soma = 0;

    alert("Digite 5 valores inteiros:");

    for (let i = 0; i < 5; i++) {
        let valor = parseInt(prompt("Digite o valor " + (i + 1) + ":"));

        vetor.push(valor);

        soma += valor;
    }

    alert("A soma dos elementos do vetor é: " + soma);
}

calcularSoma();
