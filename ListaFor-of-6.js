// 12) Crie um programa que peça para o usuário digitar 5 palavras e as
// armazene em um vetor. O programa deve gerar um novo vetor contendo
// todas as palavras digitadas em maiúsculo.
function converterParaMaiusculo() {
    let palavras = [];
    
    for (let i = 0; i < 5; i++) {
        let palavra = prompt("Digite a palavra " + (i + 1) + ":");
        palavras.push(palavra);
    }

    let palavrasMaiusculas = palavras.map(palavra => palavra.toUpperCase());

    alert("Palavras originais: " + palavras.join(", "));
    alert("Palavras em maiúsculo: " + palavrasMaiusculas.join(", "));
}

converterParaMaiusculo();

