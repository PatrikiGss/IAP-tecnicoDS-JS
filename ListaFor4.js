// 4) Re-implemente o exercício anterior fazendo com que o programa
// concatene as palavras na ordem inversa em que foram digitadas.
// Entrada → saída
// [“Olá”, “tudo”, “bem”, “com”, “você?”] → “você? com bem tudo Olá”
function concatenarPalavrasInvertido() {
    let palavras = [];
    
    alert("Digite 5 palavras:");

    for (let i = 0; i < 5; i++) {
        let palavra = prompt("Digite a palavra " + (i + 1) + ":");
        palavras.push(palavra);
    }

    let resultado = palavras.reverse().join(" ");

    alert("Resultado final: " + resultado);
}

concatenarPalavrasInvertido();
