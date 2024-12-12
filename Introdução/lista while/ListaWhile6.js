let numero = Number(prompt("Digite o valor da base do triângulo: "));
let i = 1; 
while (i <= numero) {
    let linha = '';
    let j = 1;
    while (j <= i) {
        linha += '*';
        j++;
    }
    console.log(linha);
    i++;
}