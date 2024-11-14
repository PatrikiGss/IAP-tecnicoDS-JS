var name = window.prompt("Digite o nome do aluno:");
var nota = window.prompt("Digite a nota do aluno:");
nota = Number(nota);

if (nota >= 7 && nota <= 10) {
    alert("O aluno " + name + " foi aprovado com nota " + nota);
} else if (nota >= 0 && nota < 7) {
    alert("O aluno " + name + " foi reprovado com nota " + nota);
} else {
    alert("Nota inválida. A nota deve ser um número entre 0 e 10.");}