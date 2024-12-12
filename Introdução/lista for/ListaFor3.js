// 3) Crie um programa que peça para o usuário digitar 5 palavras e as
// armazene em um vetor. O programa deve concatenar todas as
// palavras, separando-as com um espaço em branco, e mostrar o
// resultado final.
function concatenarPalavras() {
    let palavras = [];
    
    alert("Digite 5 palavras:");

    for (let i = 0; i < 5; i++) {
        let palavra = prompt("Digite a palavra " + (i + 1) + ":");
        
        palavras.push(palavra);
    }

    let resultado = palavras.join(" ");

    alert("Resultado final: " + resultado);
}

concatenarPalavras();
