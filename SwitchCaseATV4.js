var idade=window.prompt("digite uma idade");
idade = Number(idade);
switch(true){
case(idade>=0 && idade<=12):
alert("criança");
break;
case(idade>=13 && idade<=17):
alert("adolescente");
break;
case(idade>=18 && idade<=64):
alert("adulto");
break;
case(idade>=65):
alert("idoso");
break;
default :
alert(" oloco kkkkk")
}