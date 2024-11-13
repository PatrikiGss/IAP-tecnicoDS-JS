let combustivel = prompt("Digite o tipo de combustível (gasolina, etanol, diesel):").toLowerCase();

        switch (combustivel) {
            case "gasolina":
                alert("O valor por litro da gasolina é R$ 5,49.");
                break;
            case "etanol":
                alert("O valor por litro do etanol é R$ 3,89.");
                break;
            case "diesel":
                alert("O valor por litro do diesel é R$ 4,79.");
                break;
            default:
                alert("Tipo de combustível inválido. Escolha 'gasolina', 'etanol' ou 'diesel'.");
        }
