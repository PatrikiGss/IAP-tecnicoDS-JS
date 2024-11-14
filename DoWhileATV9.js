const aleatorio = Math.floor(Math.random() * 10) + 1;
let tentativa;
let iterador=0;
do {
    tentativa = Number(prompt("Adivinhe o número de 1 a 10:"));
    iterador++;
    if (tentativa === aleatorio) {
        alert("nice pai!!! mas tu errou: "+iterador+" X ate acertar KKKK, noob pra caralho");

    } else {
        alert("ERROU! Tente novamente.");
    }
} while (tentativa !== aleatorio);