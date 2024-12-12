// 11) Crie um programa que preencha um vetor com 10 números
// aleatórios entre 1 e 100. Em seguida, peça para o usuário digitar um
// valor entre 1 e 100. O programa deve criar dois vetores a partir do
// primeiro, um contendo somente os valores abaixo ou iguais ao digitado
// pelo usuário, e outro contendo somente os valores acima do digitado.
// Ao final, mostre todos os vetores.
function separarValores() {
    let vetor = [];
    
    for (let i = 0; i < 10; i++) {
        vetor.push(Math.floor(Math.random() * 100) + 1);
    }

    let numero = parseInt(prompt("Digite um valor entre 1 e 100:"));

    if (numero < 1 || numero > 100) {
        alert("Por favor, digite um número válido entre 1 e 100.");
        return;
    }

    let vetorAbaixoOuIgual = vetor.filter(valor => valor <= numero);
    let vetorAcima = vetor.filter(valor => valor > numero);

    alert("Vetor original: " + vetor.join(", "));
    alert("Valores abaixo ou iguais a " + numero + ": " + vetorAbaixoOuIgual.join(", "));
    alert("Valores acima de " + numero + ": " + vetorAcima.join(", "));
}

separarValores();
