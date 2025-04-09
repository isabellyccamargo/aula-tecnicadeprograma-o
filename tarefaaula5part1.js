let numeros = "";

for (let x = 1; x<=10; x = x+1){
    if(x == 10){
        numeros = numeros + x  + ".";
    }else{
        numeros = numeros + x + ",";
    }
    
}

console.log(numeros);

let soma = 0;
for (x = 1; x<=10; x++){
    soma= soma + x;
}

console.log("A soma dos valores é " + soma);

let contadora=0;
for(let x=121; x<237; x++){
    if(x%2== 0 ){
        contadora++;
    }
}console.log("Existe " + contadora + " numeros pares entre 121 e 237.")