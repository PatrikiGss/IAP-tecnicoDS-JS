var numero = parseFloat(prompt("Digite um número:"));

if (numero % 2 === 0 && numero>= 10) {
    window.confirm("Número par e maior que 10");
}else if(numero % 2 === 0){
    window.confirm("Número par");
    }
else
    window.confirm("Número impar");