const leitura=require("prompt-sync")();

let a = Number(leitura("Digite um valor para A: "));
let b = Number(leitura("Digite um valor para B: "));
let c = Number(leitura("Digite um valor para C: "));
console.log("O resultado de D é " + ((a+c)-b)); 

console.log("Digite três valores abaixo: ");
let v1 = Number(leitura("valor 1: "));
let v2 = Number(leitura("valor 2: "));
let v3 = Number(leitura("valor 3: "));
console.log("A soma é " + (v1+v2+v3));
console.log("A subtração é " + (v1-v2-v3));
console.log("A Multiplicação é " + (v1*v2*v3));
console.log("A divisão é " + (v1/v2/v3));

let valorIn1 = Number(leitura("Digite um valor: "));
let valorIn2 = Number(leitura("Digite outro valor: "));
console.log("A potência é " + (Math.pow(valorIn1,valorIn2)));
console.log("O produto é " + (valorIn1*valorIn2));

let val1 = Number(leitura("Digite um valor positivo "));
let val2 = Number(leitura("digite um valor (negativo ou positivo) "));
console.log("O valor do primeiro número contiua sendo " + (val1) +
". E o valor oposto do segundo número é " (val2*(-1)));
//terminar e arrumar


