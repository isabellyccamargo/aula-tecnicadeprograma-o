const leitura = require("prompt-sync")();

let valor1 = Number(leitura("Digite um valor a: "));
let valor2 = Number(leitura("Digite um valor b: "));
    if(valor1>valor2){
    console.log("o número " + valor1 + " é o maior.")
    } else if(valor1<valor2){ 
    console.log("O número " + valor2 + " é maior.")
    }else{
    console.log("Os dois são iguais.")
    }


let maior,menor;    
    let val1 = Number(leitura("Digite um valor a: "));
        maior = val1;
        menor = val1;
    let val2 = Number(leitura("Digite um valor b: "));
        if(val2 > maior){
            maior = val2;
        }if(val2 < menor){
            menor = val2;
        }
    let val3 = Number(leitura("Digite um valor c: "));
        if(val3 > maior){
            maior = val3;
        }if(val3<menor){
            menor = val3;
        }
    let val4 = Number(leitura("Digite um valor d: "));
        if(val4 > maior){
            maior = val4;
        }if(val4 <  menor){
            menor = val4;
        }
    let val5 = Number(leitura("Digite um valor e: "));
        if(val5 >maior ){
            maior = val5;
        }if(val5 < menor){
            menor = val5;
        }

    console.log("O número " + maior + " é o maior número. E o número " + menor + " é o menor." );
 