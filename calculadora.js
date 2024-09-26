
    // Função para verificar se o valor é um número válido
    function isNumber(value) {
        //para rodar o codigo no navelador renomealo para index.html e usar o live server
        // Retorna true se o valor não é NaN (Not-a-Number) e não está vazio
        return !isNaN(value) && value.trim() !== '';
    }

    let input1, input2, operacao;

    // Loop para obter o primeiro valor numérico do usuário
    do {
        input1 = window.prompt('Insira o primeiro valor: ');
    } while (!isNumber(input1)); // Continua pedindo até que o valor seja um número válido

    // Loop para obter o segundo valor numérico do usuário
    do {
        input2 = window.prompt('Insira o segundo valor: ');
    } while (!isNumber(input2)); // Continua pedindo até que o valor seja um número válido

    // Loop para obter a operação desejada do usuário
    do {
        operacao = window.prompt('Escolha qual operação quer fazer: soma (1), subtração (2), multiplicação (3), divisão (4)');
    } while (![1, 2, 3, 4].includes(Number(operacao))); // Continua pedindo até que a operação seja uma das opções válidas

    // Converte os valores de input para números
    input1 = Number(input1);
    input2 = Number(input2);
    operacao = Number(operacao);

    let resultado;

    // Seleciona a operação com base na escolha do usuário
    switch (operacao) {
        case 1:
            // Soma
            resultado = input1 + input2;
            window.alert('Resultado da soma dos valores: ' + input1 + ' e ' + input2 + ' é de: ' + resultado);
            break;
        case 2:
            // Subtração
            resultado = input1 - input2;
            window.alert('Resultado da subtração dos valores: ' + input1 + ' e ' + input2 + ' é de: ' + resultado);
            break;
        case 3:
            // Multiplicação
            resultado = input1 * input2;
            window.alert('Resultado da multiplicação dos valores: ' + input1 + ' e ' + input2 + ' é de: ' + resultado);
            break;
        case 4:
            // Divisão
            if (input2 === 0) {
                // Verifica se o divisor é zero e exibe uma mensagem de erro
                window.alert('Não é possível dividir por zero!');
            } else {
                // Realiza a divisão e exibe o resultado
                resultado = input1 / input2;
                window.alert('Resultado da divisão dos valores: ' + input1 + ' e ' + input2 + ' é de: ' + resultado);
            }
            break;
    }
