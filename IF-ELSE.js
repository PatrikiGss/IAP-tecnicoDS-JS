//verificação de idade:
var idade=window.prompt('digite sua idade:');
var idade = Number(idade);

if(idade >= 18 && idade <= 100){
   alert("maior de idade: "+ idade);
}
else if(idade<18 && idade>=0){
alert("menor de idade: " +idade);
   }
   else{
       alert("idade invalida");
   } 