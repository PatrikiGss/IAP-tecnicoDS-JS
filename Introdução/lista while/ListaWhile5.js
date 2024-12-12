let numero = Number(prompt("Digite um número para calcular a soma dos dígitos:"));
let soma = 0;
while (numero > 0) {
    let digito = numero % 10;
    soma += digito;           
    numero = Math.floor(numero / 10); 
}
alert("A soma dos dígitos é: " + soma);