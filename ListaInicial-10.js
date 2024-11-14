// Função para verificar se o valor é um número válido
function isNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

let input1, input2, operacao;

do {
    input1 = window.prompt('Insira o primeiro valor: ');
} while (!isNumber(input1)); 


do {
    input2 = window.prompt('Insira o segundo valor: ');
} while (!isNumber(input2)); 


do {
    operacao = window.prompt('Escolha qual operação quer fazer: soma (1), subtração (2), multiplicação (3), divisão (4)');
} while (![1, 2, 3, 4].includes(Number(operacao)));


input1 = Number(input1);
input2 = Number(input2);
operacao = Number(operacao);

let resultado;
switch (operacao) {
    case 1:
        resultado = input1 + input2;
        window.alert('Resultado da soma dos valores: ' + input1 + ' e ' + input2 + ' é de: ' + resultado);
        break;
    case 2:
        resultado = input1 - input2;
        window.alert('Resultado da subtração dos valores: ' + input1 + ' e ' + input2 + ' é de: ' + resultado);
        break;
    case 3:
        resultado = input1 * input2;
        window.alert('Resultado da multiplicação dos valores: ' + input1 + ' e ' + input2 + ' é de: ' + resultado);
        break;
    case 4:
        if (input2 === 0) {
            window.alert('Não é possível dividir por zero!');
        } else {
            resultado = input1 / input2;
            window.alert('Resultado da divisão dos valores: ' + input1 + ' e ' + input2 + ' é de: ' + resultado);
        }
        break;
}
