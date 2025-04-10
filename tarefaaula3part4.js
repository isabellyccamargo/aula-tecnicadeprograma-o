const leitura = require("prompt-sync")();
/*
let nome = leitura("Nome: ");
let altura = Number(leitura("Altura (em metros): "));
let peso = Number(leitura("Peso (em Kg): "))
let formula = (peso / (altura * altura).toFixed(2));
if (formula < 17.00) {
    console.log("Muito abaixo do peso.");
} else if (formula >= 17 && formula <= 18.49) {
    console.log("Abaixo do peso.");
} else if (formula >= 18.50 && formula <= 24.99) {
    console.log("Peso normal.");
} else if (formula >= 25.00 && formula <= 29.99) {
    console.log("Acima do peso.");
} else if (formula >= 30.00 && formula <= 34.99) {
    console.log("Obesidade 1.");
} else if (formula >= 35.00 && formula <= 39.99) {
    console.log("Obesidade 2 (severa).");
} else if (formula > 40.00) {
    console.log("Obesidade 3 (mórbida)");
}

let lado1 = Number(leitura("Digite o comprimento do primeiro lado:"));
let lado2 = Number(leitura("Digite o comprimento do segundo lado:"));
let lado3 = Number(leitura("Digite o comprimento do terceiro lado:"));


if (lado1 == lado2 && lado2 == lado3) {
    console.log("Triângulo Equilátero");
} else if (lado1 == lado2 || lado2 != lado3 && lado1 == lado3) {
    console.log("Triângulo Isósceles");
} else {
    console.log("Triângulo Escaleno");
}

let salarioAtual = Number(leitura("Para calcular seu aumento digite seu salário: "));
if (salarioAtual <= 1320 ) {
 console.log("Seu novo salário é R$" + (salarioAtual + (salarioAtual*0.11)));
} else if (salarioAtual > 1320 && salarioAtual <= 3000) {
    console.log("Seu novo salário é R$" + (salarioAtual + (salarioAtual*0.09)));
} else if (salarioAtual > 3000 && salarioAtual <= 7000) {
    console.log("Seu novo salário é R$" + (salarioAtual + (salarioAtual*0.06)));
} else {
    console.log("Seu novo salário é R$" + (salarioAtual + (salarioAtual*0.01)));
}

let numeros = [];

while (numeros.length < 3) {
    let numero = Number(leitura("Digite um número inteiro:"));
    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        continue;
    }  if (numeros.includes(numero)) {
        alert("Este número já foi digitado. Tente novamente.");
        continue;
    }
    numeros.push(numero);
}
numeros.sort((a, b) => a - b);
console.log("Os números em ordem crescente são: " + numeros.join(", "));


let notasTrabalho = console.log("Digite suas notas abaixo.");
let nota1 = Number(leitura("Prova 1: "));
let nota2 = Number(leitura("Prova 2: "));
let nota3= Number(leitura("Trabalho 1: "));
let nota4 = Number(leitura("Trabalho 2: "));
let media = ((nota1+nota2+nota3+nota4)/4).toFixed(2);
if(media >= 7.00) {
    console.log("Aprovado!")
} else if (media <= 6.99 && media > 4.00){
    console.log("Recuperação!");
} else if (media < 4.00){
    console.log("Reprovado!");
}


let ano = Number(leitura("Informe um  ano: "));

if (ano % 400 == 0 || ano % 4 == 0 && ano % 100 != 0){
    console.log("Esse ano é bissexto.");
} else {
    console.log("esse ano não é bissexto.");
}


let senha = Number(leitura("Digite a senha: "));
if (senha == 5479) {
    console.log("ACESSO PERMITIDO.");
} else {
    console.log("ACESSO NEGADO.");
}

let valoraplicado = Number(leitura("Digite o valor aplicado ao Banco: "));
if(valoraplicado <= 2000.00){
    console.log("O valor da taxa de correção é de 10%.");
} else if(valoraplicado >= 2001.00 && valoraplicado <=5000.00){
    console.log("O valor da taxa de correção é de 12%.");
} else if(valoraplicado>5000.00){
    console.log("O valor da taxa de correção é de 13%.");
}


const lados = parseInt(leitura("Digite o número de lados do polígono: "));
let medidaLado = parseFloat(leitura("Digite a medida do lado (em cm): "));

if(lados > 3){
    console.log("Não é um polígono.");
}else if(lados == 3){
    const area = (Math.sqrt(3) / 4) * Math.pow(medidaLado, 2);
    console.log("Polígono: Triângulo\n " + "Área: " + area.toFixed(2 + "cm²."));
}else if(lados == 4){
    const area  = Math.pow(medidaLado,2);
    console.log("Polígono: Quadrado\n" + "Área: " + area.toFixed(2) + "cm².");
}else if(lados == 5){
    console.log("É um Pentágono");
}else if(
console.log("Polígono não identificado."));


let laranjas = Number(leitura("Digite a quantidade de laranjas compradas: "));

if(laranjas < 12){
    console.log("O valor será de R$" + (laranjas*0.40).toFixed(2) + ", saindo cada uma por R$0,40.");
}else if(laranjas >= 12){
    console.log("O valor será de R$" + (laranjas*0.28).toFixed(2) + ",saindo cada uma por R$0.28.");
}

let dia = Number(leitura("Digite o dia:"));
let mes = Number(leitura("Digite o mês (1 a 12):"));
let ano = Number(leitura("Digite o ano:"));
const diasNoMes = [31, (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let resultado = validarData(dia/mes/ano);
function validarData  (dia, mes, ano){
    if (mes < 1 || mes > 12) {
        console.log ("Data inválida! Mês deve ser entre 1 e 12.");
    } else if (dia < 1 || dia > diasNoMes[mes - 1]) {
        console.log("Data inválida! O dia não é válido para o mês informado.");
    }else(
        console.log("Data válida!" + resultado));
} //arrumar



function calcularSituacaoAluno() {
    let prova1 = Number(leitura("Digite a nota da Prova 1 (0 a 10):"));
    let prova2 = Number(leitura("Digite a nota da Prova 2 (0 a 10):"));
    let trabalho1 = Number(leitura("Digite a nota do Trabalho 1 (0 a 10):"));
    let trabalho2 = Number(leitura("Digite a nota do Trabalho 2 (0 a 10):"));
    let trabalho3 = Number(leitura("Digite a nota do Trabalho 3 (0 a 10):"));
    let trabalho4 = Number(leitura("Digite a nota do Trabalho 4 (0 a 10):"));

    if (
        (prova1 < 0 || prova1 > 10) || 
        (prova2 < 0 || prova2 > 10) || 
        (trabalho1 < 0 || trabalho1 > 10) || 
        (trabalho2 < 0 || trabalho2 > 10) || 
        (trabalho3 < 0 || trabalho3 > 10) || 
        (trabalho4 < 0 || trabalho4 > 10)
    ) {
        console.log("Por favor, insira notas válidas entre 0 e 10.");
        return; 
    }

    let mediaProvas = (prova1 + prova2) / 2;

    let mediaTrabalhos = (trabalho1 + trabalho2 + trabalho3 + trabalho4) / 4;

    let mediaFinal = (mediaProvas * 0.5) + (mediaTrabalhos * 0.5);

    if (mediaFinal >= 7.0) {
        console.log("Aprovado");
    } else if (mediaFinal >= 4.0 && mediaFinal < 7.0) {
        console.log("Recuperação");
    } else {
        console.log("Reprovado");
    }
}
calcularSituacaoAluno();


const dia = parseInt(leitura("Digite o dia: "));
const mes = parseInt(leitura("Digite o mês: "));
const ano = parseInt(leitura("Digite o ano: "));
const mescom30Dias = [4,6,9,11]
const mesCom31Dias = [1,3,5,7,8,10,12]

if (dia < 1 || dia > 31) {
    console.log("Dia inválido!");
}else if (mes < 1 || mes > 12) {
    console.log("Mês inválido!");
}else if (dia == 31 && mescom30Dias.includes(mes)) {
    console.log("não existe o dia " + dia + " no mês " + mes);
}else if (mes == 2){
    if (dia > 29){
        console.log("Não existe o dia " + dia + " no mês " + mes);
    } else if (!eanoBissexto(ano) && dia > 28) {
        console.log("Não existe o dia " + dia + " no mês " + mes + ", pois o ano " + ano + " não é um ano bissexto.");
    }else {
        console.log("A data é: " + dia + "/" + mes + "/" + ano);
    }
}else {
    console.log("A data é: " + dia + "/" + mes + "/" + ano );
}
function eanoBissexto(ano){
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}



var mesNumero= Number(leitura("Digite um nùmero que indicará" +
     " o seu mês respectivo: "));

if (mesNumero == 1) {
    console.log("Janeiro.");
} else if (mesNumero == 2) {
    console.log("Fevereiro.");
} else if (mesNumero == 3) {
    console.log ("Março.") 
} else if (mesNumero == 4) {
    console.log ("Abril.");
} else if (mesNumero == 5) {
    console.log("Maio");
} else if(mesNumero == 6) {
    console.log("Junho.")
} else if (mesNumero == 7) {
    console.log("Julho.");
} else if (mesNumero == 8) {
    console.log("Agosto.");
} else if (mesNumero == 9) {
    console.log("Setembro.");
} else if (mesNumero == 10) {
    console.log("Outubro");
} else if (mesNumero == 11) {
    console.log("Novembro.");
} else if (mesNumero == 12) {
    console.log("Dezembro.");
} else (
    console.log("Inválido.")
)
 


angulo1 = Number(leitura("Digite o valor do primeiro ângulo: "));
angulo2 = Number(leitura("Digite o valor do segundo ângulo: "));
angulo3 = Number(leitura("Digite o valor do terceiro ângulo: "));

if(angulo1 + angulo2 + angulo3 == 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0){
    if(angulo1 == 90 && angulo2 == 90 && angulo3 == 90){
        console.log("Triângulo Retângulo");
     } else if (angulo1 > 90 || angulo2 > 90 || angulo3 > 90){
        console.log("Triângulo Obtusângulo");
     }else(
            console.log("Triângulo Acutângulo"));
     }
     else {
    console.log("Ângulos inválidos para formar um triângulo.")};

    */
const anoNascimento = parseInt(leitura("Digite o ano de nascimento: "));

const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

if (idade >= 16) {
  console.log(`Você tem ${idade} anos. Pode votar este ano.`);
} else {
  console.log(`Você tem ${idade} anos. Ainda não pode votar este ano.`);
}
