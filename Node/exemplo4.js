// 4) Crie uma função que receba um número e retorne seu fatorial. Utilize
// recursão para resolver este problema.
function fatorialRecursive(recursive){
    if (recursive === 0 || recursive === 1) {
        return 1;
    }
    return recursive * fatorialRecursive(recursive - 1);
}
var mostra=fatorialRecursive(5);
console.log(mostra);