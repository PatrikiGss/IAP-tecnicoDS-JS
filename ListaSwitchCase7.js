var temperatura = window.prompt("Digite a temperatura em Celsius");
        temperatura = Number(temperatura);
            var conversao = window.prompt("Digite se quer converter para Fahrenheit (F) ou para Kelvin (K)").toUpperCase();
        
            switch (conversao) {
                case "F":
                    var fahrenheit = (temperatura * (9/5)) + 32;
                    alert(temperatura + " °C em Fahrenheit é: " + fahrenheit + " °F");
                    break;
                case "K":
                    var kelvin = temperatura + 273.15;
                    alert(temperatura + " °C em Kelvin é: " + kelvin + " K");
                    break;
                default:
                    alert("Conversão inválida. Por favor, escolha 'F' para Fahrenheit ou 'K' para Kelvin.");
                    break;
            }