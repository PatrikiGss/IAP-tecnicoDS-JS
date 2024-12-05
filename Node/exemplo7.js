// 7) Escreva uma função que receba um array de números e retorne um
// novo array com apenas os números pares.
function TrocaArray(lista1){
let lista2=[];
for(let i=0;i<lista1.length;i++){
    if(lista1[i]%2===0){
        lista2.push(lista1[i]);
    }
}
return lista2;
}
let lista1=[1,2,3,4,5,6,7,8,9];
let guarda=TrocaArray(lista1);
console.log(guarda);
