var numero = parseFloat(prompt("Digite um número:"));

switch (numero) {
case 1:
 window.confirm("Domingo");
 break;
case 2:
 window.confim("Segunda-feira");
 break;
case 3:
 window.confirm("Terça-feira");
 break;
case 4:
 window.confirm("Quarta-feira");
 break;
case 5:
 window.confirm("Quinta-feira");
 break;
case 6:
 window.confirm("Sexta-feira");
 break; 
case 7:
 window.confirm("Sábado");
 break;
 default :
 window.confirm("fora do intervalo de dias da semana");
}