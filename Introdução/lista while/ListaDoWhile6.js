let old_vet = [];
let new_vet = [];
let palavra;
do{
palavra=prompt("digite uma palavra").toUpperCase();
old_vet.push(palavra);
}while(old_vet.length<=4);
new_vet=old_vet;
alert(new_vet);