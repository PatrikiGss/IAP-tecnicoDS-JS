// 9) Crie um programa que preencha um vetor com 20 números
// inteiros aleatórios entre 1 e 100. O programa deve descobrir e mostrar
// qual é o maior número do vetor.
function maiorNumero() {
    let vetor = [];
    
    // Preenchendo o vetor com 20 números aleatórios entre 1 e 100
    for (let i = 0; i < 20; i++) {
        vetor.push(Math.floor(Math.random() * 100) + 1);
    }

    // Encontrando o maior número do vetor
    let maior = Math.max(...vetor);

    alert("Os números no vetor são: " + vetor.join(", "));
    alert("O maior número do vetor é: " + maior);
}

maiorNumero()
