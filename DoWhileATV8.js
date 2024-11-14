let nota=0;
let iterador=0;
let soma=0;
   do {
   nota=Number(prompt("digite uma nota(digite um valor negativo para sair do loop)"));  
   soma+=nota;
   iterador++;
}while (nota>0) 
let media=soma/iterador;
alert("media: "+media)