// 10) Crie um programa que preencha um vetor com 50 números inteiros
// aleatórios entre 1 e 10. Em seguida, peça para o usuário digitar um
// número entre 1 e 10. O programa deve mostrar a quantidade de
// ocorrências do número digitado no vetor.
function contarOcorrencias() {
    let vetor = [];
    
    for (let i = 0; i < 50; i++) {
        vetor.push(Math.floor(Math.random() * 10) + 1);
    }

    let numero = parseInt(prompt("Digite um número entre 1 e 10:"));

    if (numero < 1 || numero > 10) {
        alert("Por favor, digite um número válido entre 1 e 10.");
        return;
    }

    let ocorrencias = vetor.filter(n => n === numero).length;

    alert("O número " + numero + " aparece " + ocorrencias + " vez(es) no vetor.");
}

contarOcorrencias();

