
const leitura = require("prompt-sync")();

let nome = leitura("Digite seu nome: ");

console.log("Olá, seja bem vindo: " + nome);

let cor = leitura("Qual a sua cor favorita?");
console.log("Sua cor favorita é: " + cor);

let filmeFavorito = leitura("Qual o seu filme favorito?");
console.log("Seu filme favorito é" + filmeFavorito);
let cidadeOndeMora = leitura("qual a cidade onde você mora?");
console.log("Você mora na cidade de: " + cidadeOndeMora);
let animalDeEstimacao = leitura("Qual o mome do seu animal de estimação?");
console.log("O nome do seu animal de estimação é: " + animalDeEstimacao);