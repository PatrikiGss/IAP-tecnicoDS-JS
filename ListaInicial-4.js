var numero1 = parseFloat(prompt("Digite um número:"));
var numero2 = parseFloat (prompt("Digite um numero:"));

if (numero1>numero2 ) {
    window.confirm("O primeiro número é maior");
}
else if (numero1<numero2) {
    window.confirm ("O segundo número é maior");

} else
        window.confirm ("Os dois números são iguais");