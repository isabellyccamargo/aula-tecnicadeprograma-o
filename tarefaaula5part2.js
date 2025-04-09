const leitura = require("prompt-sync")();

/*
const senhaCorreta = 123456;
let senhaInformada;
do {
    senhaInformada = leitura("Informe a senha: ");
    if (senhaInformada != senhaCorreta) {
        console.log("Senha incorreta tente novamente");
    } else {
        console.log("bem vindo!");
    }
} while (senhaInformada != senhaCorreta);

let numero = leitura("Informe o valor: ");
while (numero != 0){
    console.log(numero);
    numero--;
}
*/

let paisA = 900000000;
let paisB = 2000000000;
let qtdanos = 0;

while (paisB > paisA) {
    paisA = paisA * 1.04;
    paisB = paisB * 1.0195;
    qtdanos++;
}
console.log("Demorou " + qtdanos +  " anos para o País A ter mais habitantes que o País B.");
