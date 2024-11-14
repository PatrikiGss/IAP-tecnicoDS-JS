function removerAcento(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  }
var cor = window.prompt("Digite a cor").toLowerCase();
cor = removerAcento(cor);
switch(cor){
case "vermelho":
alert("pare!");
break;
case "amarelo":
alert("atenção");
break;
case "verde":
alert("siga");
break;
default:
alert("cor invalida");}