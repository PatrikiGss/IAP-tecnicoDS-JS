// 6) Crie um programa que peça para o usuário digitar 6 valores
// inteiros. Os três primeiros valores devem ser armazenados em um vetor
// A e os três últimos em um vetor B. Em seguida, o programa deve
// mostrar o resultado das operações: A+B, A-B, A*B e A/B.
function operarVetores() {
    let A = [];
    let B = [];
    
    for (let i = 0; i < 3; i++) {
        A.push(parseInt(prompt("Digite o valor " + (i + 1) + " para o vetor A:")));
    }

    for (let i = 0; i < 3; i++) {
        B.push(parseInt(prompt("Digite o valor " + (i + 1) + " para o vetor B:")));
    }

    let soma = [];
    let subtracao = [];
    let multiplicacao = [];
    let divisao = [];
    
    for (let i = 0; i < 3; i++) {
        soma.push(A[i] + B[i]);
        subtracao.push(A[i] - B[i]);
        multiplicacao.push(A[i] * B[i]);
        divisao.push(A[i] / B[i]);
    }

    alert("Resultado da soma (A + B): " + soma.join(", "));
    alert("Resultado da subtração (A - B): " + subtracao.join(", "));
    alert("Resultado da multiplicação (A * B): " + multiplicacao.join(", "));
    alert("Resultado da divisão (A / B): " + divisao.join(", "));
}

operarVetores();


