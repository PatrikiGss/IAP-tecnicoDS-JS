let segundos = Number(prompt("Digite o valor em segundos:"));
        
let unidade = prompt("Para qual unidade deseja converter? (horas/minutos)").toLowerCase();

        switch (unidade) {
            case "horas":
                let horas = segundos / 3600;
                alert(`${segundos} segundos equivalem a ${horas.toFixed(2)} horas.`);
                break;
            case "minutos":
                let minutos = segundos / 60;
                alert(`${segundos} segundos equivalem a ${minutos.toFixed(2)} minutos.`);
                break;
            default:
                alert("Unidade de tempo inválida. Escolha 'horas' ou 'minutos'.");
        }