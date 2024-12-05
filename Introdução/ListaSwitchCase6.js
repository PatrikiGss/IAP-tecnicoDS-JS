var numero=window.prompt("digite um numero de um a 5");
numero = Number(numero);
switch(numero){
case 1 :
alert("fatorial de 1: "+numero);
break;
case 2 :
alert("fatorial de 2: "+numero*1);
break;
case 3 :
alert("fatorial de 3: "+numero*2*1);
break;
case 4 :
alert("fatorial de 4: "+numero*3*2*1);
break;
case 5 :
alert("fatorial de 5: "+numero*4*3*2*1);
break;
default :
alert("fora do intervalo");
break;
}