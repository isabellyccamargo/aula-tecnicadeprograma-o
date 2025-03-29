const leitura = require ("prompt-sync")();

let numero = Number(leitura("Digite um número "));
    if(numero % 2 == 0){
        console.log("O Número " + numero + " é par");
    } else{
        console.log("O Número " + numero + " é ímpar.")
    };