//verificação se é impar ou par
var n1= window.prompt("digite o numero 1");
n1 = Number(n1);
var n2= window.prompt("digite o numero 2");
n2 = Number(n2);
var resto=n1%n2;
if(resto===0){
   alert("o numero é par")
}else{
   alert("o numero é impar")
} 