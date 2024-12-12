var n1= window.prompt("digite o numero 1");
n1 = Number(n1);
var n2= window.prompt("digite o numero 2");
n2 = Number(n2);
if(n2==n1){
   alert("o primeiro e o segundo numero sao iguais")
}else if(n1>=n2){
    alert("o primero numero é maior que o segundo")
}else{
    alert("o segundo numero é maior que o primeiro");
}