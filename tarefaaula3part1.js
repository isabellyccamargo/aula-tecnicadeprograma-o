const leitura = require("prompt-sync")();

let inteiro = leitura("Digite o numero: ");
console.log("Divisao " + (inteiro/2));

let decimal = leitura("Digite um valor decimal: ");
console.log("A divisão por 5 é: " + (decimal/5));

let decimaL = leitura("Digite um valor decimal: ");
let divisor = leitura("Digite um valor inteiro: ");
console.log("A divisão é " + (decimaL/divisor));

let valorI = leitura("Digite um valor: ");
let valorIn = leitura("Digite outro valor: ");
console.log("a divisão é: " + (valorI/valorIn));

let valor1 = Number(leitura("digite um valor: "));
let valor2 = Number(leitura("digite um valor: "));
console.log("A soma é  " + (valor1+valor2) + ".  A diferença entre eles é:"  + (valor1%valor2)); 

let deci = leitura("digite um valor decimal: ");
let inte = leitura("digite um valor inteiro: ");
console.log("O produto é: " + (deci*inte));

let deci1 = Number(leitura("Digite um valor decimal: "));
let deci2 = Number(leitura("Digite outro valor decimal: "));
console.log("A média deles é " + ((deci1+deci2) / 2));



