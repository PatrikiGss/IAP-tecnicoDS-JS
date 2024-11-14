var descrição = window.prompt("Digite a categoria do filme (L, 10, 12, 14, 16, 18):").toUpperCase();

switch(descrição) {
    case "L":
        alert("Livre para todos os públicos");
        break;
    case "10":
        alert("Não recomendado para menores de 10 anos.");
        break;
    case "12":
        alert("Não recomendado para menores de 12 anos.");
        break;
    case "14":
        alert("Não recomendado para menores de 14 anos.");
        break;
    case "16":
        alert("Não recomendado para menores de 16 anos.");
        break;
    case "18":
        alert("Não recomendado para menores de 18 anos.");
        break;
    default:
        alert("Descrição errada");
        break;
}