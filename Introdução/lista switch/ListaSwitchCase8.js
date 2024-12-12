var valorReais = window.prompt("Digite o valor em reais (R$):");
valorReais = Number(valorReais);
    var moeda = window.prompt("Digite a moeda para a qual deseja converter ( para Dolar,Euro,ou Iene):").toUpperCase();

    var cotacaoDolar = 5.00;  // 1 R$ = 5.00 U$
    var cotacaoEuro = 5.50;   // 1 R$ = 5.50 €
    var cotacaoIene = 130.00; // 1 R$ = 130.00 ¥

    var resultado;
    switch (moeda) {
        case "DOLAR":
            resultado = valorReais / cotacaoDolar;
            alert(valorReais.toFixed(2) + " R$ em Dólares (U$) é: " + resultado.toFixed(2) + " U$");
            break;
        case "EURO":
            resultado = valorReais / cotacaoEuro;
            alert(valorReais.toFixed(2) + " R$ em Euros (€) é: " + resultado.toFixed(2) + " €");
            break;
        case "IENE":
            resultado = valorReais / cotacaoIene;
            alert(valorReais.toFixed(2) + " R$ em Ienes (¥) é: " + resultado.toFixed(2) + " ¥");
            break;
        default:
            alert("Moeda inválida! Digite 'U$' para Dólar, '€' para Euro ou '¥' para Iene.");
            break;
    }
