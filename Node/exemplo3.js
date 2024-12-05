// 3) Crie uma função que receba uma string e retorne a mesma string em
// letras maiúsculas.

function FraseMaiuscula(palavra) {
    var maiusculo =palavra.toUpperCase();
    return maiusculo;
  }
  var mostra= FraseMaiuscula("teste");
  console.log(mostra);