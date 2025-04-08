const leitura = require ("prompt-sync")();

let numero = Number(leitura("Digite um número "));
    if(numero % 2 == 0){
        console.log("O Número " + numero + " é par");
    } else{
        console.log("O Número " + numero + " é ímpar.");
    }

let numeroPArDivisivel7 = Number(leitura("Informe um número para verificar se é par ou divisível por 7 : "))
    if((numeroPArDivisivel7 % 2 ==  0) && (numeroPArDivisivel7 % 7 == 0 )){
    console.log("O numero é par e divisivel por 7");
    }else{
    console.log("O número não é par e nem divisivel por 7");
    }

let numeroDivisivel7Divisivel23 = Number(leitura("Informe um número para verificar se o número é divisivel por 7 ou por 23: "))
    if((numeroDivisivel7Divisivel23 % 7 == 0) || (numeroDivisivel7Divisivel23 % 23 == 0 )){
        console.log("O número é divisivel por 7 ou por 23.");
     }else{
        console.log("O número não é divisivel nem por 7 nem por 23.");
     }