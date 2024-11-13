var numero = prompt("Digite um número de 1 até 4"); 
numero = Number(numero); 

switch(numero) {
    case 1:
        alert("Verão"); 
        break;
    case 2:
        alert("Outono"); 
        break;
    case 3:
        alert("Inverno"); 
        break;
    case 4:
        alert("Primavera"); 
        break;
    default:
        alert("Número fora do intervalo"); 
}