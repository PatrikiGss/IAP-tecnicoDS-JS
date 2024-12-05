// 7) Crie um programa que peça para o usuário digitar 5 valores
// (números ou letras) e os armazene em um vetor. O programa deve
// percorrer a estrutura e mostrar cada valor.
function exibirValores() {
    let valores = [];
    
    for (let i = 0; i < 5; i++) {
        let valor = prompt("Digite o valor " + (i + 1) + ":");
        valores.push(valor);
    }

    for (let i = 0; i < valores.length; i++) {
        alert("Valor " + (i + 1) + ": " + valores[i]);
    }
}

exibirValores();