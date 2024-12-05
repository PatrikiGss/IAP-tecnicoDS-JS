var numero = parseFloat(prompt("Digite um número:"));

if (numero % 3 === 0 && numero % 5 === 0) {
    window.confirm("Número é divisível por 3 e 5.");
} else if (numero % 3 === 0) {
    window.confirm("Número é divisível por 3.");
} else if (numero % 5 === 0) {
    window.confirm("Número é divisível por 5.");
} else {
    window.confirm("Número não é divisível por 3 nem por 5.");
}