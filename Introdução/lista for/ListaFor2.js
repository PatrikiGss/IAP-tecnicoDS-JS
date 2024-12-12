// 2) Crie um programa que preencha um vetor com valores de 1 a 50.
// Em seguida, percorra esse vetor mostrando a diferença (subtração) dos
// valores ímpares e a soma dos valores pares.
function calcularDiferencaESoma() {
    let vetor = [];
    let somaPares = 0;
    let diferencaImpares = 0;

    for (let i = 1; i <= 50; i++) {
        vetor.push(i);
    }

    for (let i = 0; i < vetor.length; i++) {
        let valor = vetor[i];
        
        if (valor % 2 === 0) {
            somaPares += valor;
        } else {
            
            diferencaImpares -= valor;
        }
    }

    alert("A soma dos valores pares é: " + somaPares);
    alert("A diferença dos valores ímpares é: " + diferencaImpares);
}

calcularDiferencaESoma();