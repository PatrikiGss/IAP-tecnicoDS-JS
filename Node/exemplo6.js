// 6) Crie uma função que receba um número como argumento e retorne a
// sequência de Fibonacci até esse número.
function Fibonacci(n1){
    let fibonacci = [0,1];
    for(let i = 2; i <= n1; i++){
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }
    return fibonacci;
}
var mostra=Fibonacci(5);

console.log(mostra); 
