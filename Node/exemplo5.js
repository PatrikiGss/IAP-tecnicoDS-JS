// 5) Escreva uma função que receba dois números como parâmetros e
// retorne o maior entre eles.
function RetornaMaior(n1,n2){
    if(n1>n2){
        return n1;
    }
    else if(n2>n1){
        return n2;
}
else{
    return "Os números são iguais.";
}
}
var mostra=RetornaMaior(6,6);
console.log(mostra);