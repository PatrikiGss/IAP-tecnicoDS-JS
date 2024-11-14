var idade = parseFloat(prompt("Digite uma idade:"));

if (idade >=18&&idade<=130) {
    window.confirm("Usuário é maior de idade");
}
else if(idade>=0&&idade<=17){
    window.confirm("Usuário é menor de idade");
}
else
    window.confirm("oloco cara kkkk");