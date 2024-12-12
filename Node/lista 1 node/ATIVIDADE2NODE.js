// 2)Escreva uma função que receba um número e retorne true se for par
// e false se for ímpar.

function RetornaPar(numero){
    if(numero%2==0){
        return true;
    }else{
        return false;
    }
    }
    var mostra=RetornaPar(3);
    console.log(mostra);