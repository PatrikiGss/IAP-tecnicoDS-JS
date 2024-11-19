// 8) Crie um programa que peça para o usuário digitar 5 valores
// inteiros e os armazene em um vetor. Em seguida, peça para o usuário
// digitar um valor multiplicador. O programa deve mostrar todos os
// elementos do vetor multiplicados pelo valor digitado.
function multiplicarVetor() {
    let valores = [];
    
    for (let i = 0; i < 5; i++) {
        let valor = parseInt(prompt("Digite o valor " + (i + 1) + ":"));
        valores.push(valor);
    }

    let multiplicador = parseInt(prompt("Digite o valor multiplicador:"));

    let resultados = valores.map(valor => valor * multiplicador);

    alert("Valores multiplicados pelo " + multiplicador + ": " + resultados.join(", "));
}

multiplicarVetor();
