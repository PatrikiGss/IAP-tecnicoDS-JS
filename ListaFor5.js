// 5) Crie um programa que peça para o usuário digitar várias palavras,
// até que ele digite a palavra ‘sair’. As palavras digitadas devem ser
// armazenadas em um vetor, exceto a palavra ‘sair’. Em seguida, peça
// para o usuário digitar uma palavra qualquer. O programa deve buscar
// a palavra digitada no vetor de palavras. Caso a palavra exista,
// mostrar uma mensagem positiva para o usuário e a posição da
// palavra no vetor. Caso não exista, informe o usuário.
function buscarPalavra() {
    let palavras = [];
    
    while (true) {
        let palavra = prompt("Digite uma palavra (ou 'sair' para encerrar):");
        
        if (palavra === 'sair') {
            break;
        }
        
        palavras.push(palavra);
    }

    let busca = prompt("Digite a palavra que deseja buscar:");

    let indice = palavras.indexOf(busca);

    if (indice !== -1) {
        alert("Palavra encontrada! A posição dela no vetor é: " + indice);
    } else {
        alert("Palavra não encontrada.");
    }
}

buscarPalavra();
