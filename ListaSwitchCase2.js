var nota = prompt("Digite a nota do aluno:");
nota = Number(nota);

switch (true) {
    case (nota >= 7&&nota<=10):
        alert("Aluno Aprovado!");
        break;
    case (nota >= 4 && nota < 7):
        alert("Aluno em Recuperação.");
        break;
    case (nota >= 0 && nota < 4):
        alert("Aluno Reprovado.");
        break;
    default:
        alert("Erro! Nota fora do intervalo.");
        break;
}
