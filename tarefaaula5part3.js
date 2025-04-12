const leitura = require("prompt-sync")();

/*
let numeros = "";
for (let x = 1; x<=100; x = x+1){
    if(x == 100){
        numeros = numeros + x  + ".";
    }else{
        numeros = numeros + x + ",";
    }
}
console.log(numeros);


let numeros = "";
for (let x = 1; x<=50; x = x+1){
    if(x == 50){
        numeros = numeros + x  + ".";
    }else{
        numeros = numeros + x + ",";
    }
}
console.log(numeros);


let numerosimpares="";
for(let x=10; x<50; x++){
    if(x%2 != 0 ){
        numerosimpares = numerosimpares + x + ",";
    }
}console.log(numerosimpares)


let numerosdiminui= "";
for (let x = 20; x >=0; x = x-1){
    if(x == 0){
        numerosdiminui = numerosdiminui + x  + ".";
    }else{
        numerosdiminui = numerosdiminui + x + ",";
    }
}
console.log(numerosdiminui); 


let soma = 0;
for (x = 3; x<=10; x++){
    soma= soma + x;
}

console.log("A soma dos valores é " + soma);


let soma = 0;
for (x = 4; x<=20; x++){
    soma= soma + x;
}

console.log("A soma dos valores é " + soma);



let numeroImpar = 0;
for(let x=10; x<=15; x++){
    if(x % 2 != 0){
        numeroImpar = numeroImpar + x;
    }
}

console.log(numeroImpar);


let multiplicar = 1;
for(let x=2; x<=5; x++){
   multiplicar = multiplicar * x;
}
console.log(multiplicar);



let media = 0;
let soma = 0;
for(x=1; x<=10; x++){
    soma = soma + x;
    media = soma / x;
}
console.log(media);

soma = 0;
let contador= 0;
for(let x=11; x<50; x +=2){
    soma += x;
    contador++;
    }
    media = soma / contador;

console.log(media);


let soma = 0;
let contador = 0;

for (let x = 10; x <= 50; x++) {
  if (x % 5 === 0) {
    soma += x;
    contador++;
  }
}

if (contador > 0) {
  let media = soma / contador;
  console.log("A média dos números divisíveis por 5 de 10 a 50 é: " + media);
} else {
  console.log("Nenhum número divisível por 5 encontrado.");
}


for (let i = 1; i <= 10; i++) {
    console.log(`\nTabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }

  

  const prompt = require('prompt-sync')();  


const numero = parseInt(prompt('Digite um número inteiro para encontrar seus divisores: '));


if (isNaN(numero) || numero <= 0) {
  console.log('Por favor, digite um número inteiro positivo.');
} else {
  console.log(`Divisores de ${numero}:`);

  for (let x = 1; x <= numero; x++) {
    if (numero % x === 0) {
      console.log(i);  
    }
  }
}
  

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Digite o valor inicial: ', function(inicial) {
  rl.question('Digite o valor final: ', function(final) {
    const numInicial = parseInt(inicial);
    const numFinal = parseInt(final);
    if (isNaN(numInicial) || isNaN(numFinal) || numInicial >= numFinal) {
      console.log('Por favor, digite valores válidos. O valor inicial deve ser menor que o valor final.');
    } else {
      console.log(`Os números entre ${numInicial} e ${numFinal} são:`);
      for (let x = numInicial + 1; x < numFinal; x++) {
        console.log(x);
      }
    }

    rl.close();
  });
});


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número natural (inteiro positivo) para ver sua tabuada: ', function(input) {
  const numero = parseInt(input);

  if (isNaN(numero) || numero <= 0) {
    console.log('Por favor, digite um número natural válido (inteiro positivo).');
  } else {
    console.log(`Tabuada do ${numero}:`);
    
    for (let X = 1; X <= 10; X++) {
      console.log(`${numero} x ${X} = ${numero * X}`);
    }
  }

  rl.close();
});


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o valor inicial: ', function(inicial) {

  rl.question('Digite o valor final: ', function(final) {
    
    const numInicial = parseInt(inicial);
    const numFinal = parseInt(final);

   
    if (isNaN(numInicial) || isNaN(numFinal) || numInicial > numFinal) {
      console.log('Por favor, digite valores válidos. O valor inicial deve ser menor ou igual ao valor final.');
    } else {
      console.log(`Os múltiplos de 3 entre ${numInicial} e ${numFinal} são:`);
      for (let i = numInicial; i <= numFinal; i++) {
        if (i % 3 === 0) {
          console.log(i);
        }
      }
    }
    
    rl.close();
  });
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro valor inteiro: ', function(valor1) {
  rl.question('Digite o segundo valor inteiro: ', function(valor2) {
    const num1 = parseInt(valor1);
    const num2 = parseInt(valor2);
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, digite valores inteiros válidos.');
    } else {
      let soma = 0;
      const inicio = Math.min(num1, num2);
      const fim = Math.max(num1, num2);
      for (let i = inicio; i <= fim; i++) {
        soma += i;
      }
      console.log(`A soma dos números entre ${inicio} e ${fim} (inclusive) é: ${soma}`);
    }
    rl.close();
  });
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro valor inteiro: ', function(valor1) {
  rl.question('Digite o segundo valor inteiro: ', function(valor2) {
    const num1 = parseInt(valor1);
    const num2 = parseInt(valor2);
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, digite valores inteiros válidos.');
    } else {
      let somaPares = 0;
      const inicio = Math.min(num1, num2);
      const fim = Math.max(num1, num2);
      for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {  
          somaPares += i;
        }
      }
      console.log(`A soma dos números pares entre ${inicio} e ${fim} (inclusive) é: ${somaPares}`);
    }
    rl.close();
  });
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite o primeiro número inteiro: ', function(primeiro) {
  rl.question('Digite o segundo número inteiro: ', function(segundo) {
    const num1 = parseInt(primeiro);
    const num2 = parseInt(segundo);
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Erro: Digite apenas números inteiros válidos.');
      rl.close();
      return;
    }
    const inicio = Math.min(num1, num2);
    const fim = Math.max(num1, num2);
    let soma = 0;
    for (let i = inicio; i <= fim; i++) {
      soma += i;
    }
    console.log(`A soma dos números entre ${inicio} e ${fim} (inclusive) é: ${soma}`);
    rl.close();
  });
});


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let quantidadeAlunos = 0;
let contador = 0;
let somaIdades = 0;
rl.question('Digite a quantidade de alunos (menos que 5): ', function(qtd) {
  quantidadeAlunos = parseInt(qtd);

  if (isNaN(quantidadeAlunos) || quantidadeAlunos <= 0 || quantidadeAlunos >= 5) {
    console.log('Erro: a quantidade deve ser um número entre 1 e 4.');
    rl.close();
    return;
  } function lerIdade() {
    rl.question(`Digite a idade do aluno ${contador + 1}: `, function(idade) {
      const idadeAluno = parseInt(idade);
      if (isNaN(idadeAluno) || idadeAluno <= 0) {
        console.log('Idade inválida. Digite um número maior que zero.');
        lerIdade();
      } else {
        somaIdades += idadeAluno;
        contador++;
        if (contador < quantidadeAlunos) {
         
        } else {
          const media = somaIdades / quantidadeAlunos;
          console.log(`A média de idade da turma é: ${media.toFixed(2)} anos.`);
          rl.close();
        }
      }
    });
  } lerIdade();
});


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número natural: ', function(valor) {
  const numero = parseInt(valor);

  if (isNaN(numero) || numero < 0) {
    console.log('Por favor, digite um número natural (inteiro maior ou igual a 0).');
  } else {
    console.log(`Números naturais menores que ${numero}:`);
    for (let i = 0; i < numero; i++) {
      console.log(i);
    }
  }

  rl.close();
});



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Digite o valor inicial do investimento: ', function(valorInicial) {
  rl.question('Digite o percentual de lucro mensal (ex: 1 para 1%): ', function(percentual) {
    rl.question('Digite a quantidade de meses da aplicação: ', function(meses) {
      const investimento = parseFloat(valorInicial);
      const taxa = parseFloat(percentual);
      const duracao = parseInt(meses);

      if (isNaN(investimento) || isNaN(taxa) || isNaN(duracao) || investimento <= 0 || taxa <= 0 || duracao <= 0) {
        console.log('Erro: Digite valores válidos e positivos.');
        rl.close();
        return;
      }

      let totalLucro = 0;
      let valorAtual = investimento;

      console.log(`\nRendimento mês a mês:`);

      for (let i = 1; i <= duracao; i++) {
        const lucroMes = valorAtual * (taxa / 100);
        totalLucro += lucroMes;
        valorAtual += lucroMes;

        console.log(`Mês ${i}: Lucro = R$ ${lucroMes.toFixed(2)}`);
      }

      console.log(`\nLucro total após ${duracao} meses: R$ ${totalLucro.toFixed(2)}`);
      rl.close();
    });
  });
});



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro: ', function(valor) {
  const numero = parseInt(valor);

  if (isNaN(numero)) {
    console.log('Entrada inválida. Digite um número inteiro.');
  } else if (numero > 0) {
    for (let i = 0; i < numero; i++) {
      console.log(i);
    }
    console.log(0);
  } else {
    for (let i = numero; i <= 0; i++) {
      console.log(i);
    }
  }

  rl.close();
});

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let contador = 0;
let dentroDoIntervalo = 0;

function lerValor() {
  if (contador < 10) {
    rl.question(`Digite o valor ${contador + 1}: `, function(resposta) {
      const valor = parseInt(resposta);
      if (!isNaN(valor) && valor >= 100 && valor <= 500) {
        dentroDoIntervalo++;
      }contador++;
      lerValor(); 
    });
  } else {
    console.log(`\nQuantidade de valores entre 100 e 500: ${dentroDoIntervalo}`);
    rl.close();
  }
}

lerValor();


let termo1 = 0;
let termo2 = 1;

console.log('Série de Fibonacci (10 primeiros termos):');

for (let i = 0; i < 10; i++) {
  console.log(termo1);

  let proximo = termo1 + termo2;
  termo1 = termo2;
  termo2 = proximo;
}
  

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número inteiro positivo: ', function(resposta) {
  const numero = parseInt(resposta);

  if (isNaN(numero) || numero <= 1) {
    console.log('Número inválido. Deve ser maior que 1.');
  } else {
    let primo = true;

    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        primo = false;
        break;
      }
    }

    if (primo) {
      console.log(`${numero} é um número primo.`);
    } else {
      console.log(`${numero} não é um número primo.`);
    }
  }

  rl.close();
});


let idadeDidi = 52;
let idadeFilho1 = 10;
let idadeFilho2 = 12;
let anos = 0;

while (idadeDidi !== (idadeFilho1 + idadeFilho2)) {
  idadeDidi++;
  idadeFilho1++;
  idadeFilho2++;
  anos++;
}

console.log(`A idade de Didi será igual à soma das idades dos filhos em ${anos} anos.`);
console.log(`Isso acontecerá quando Didi tiver ${idadeDidi} anos, e seus filhos terão ${idadeFilho1} e ${idadeFilho2} anos, respectivamente.`);


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o primeiro número (a): ', function(a) {
  rl.question('Digite o segundo número (b): ', function(b) {
    let numA = parseInt(a);
    let numB = parseInt(b);
    while (numB !== 0) {
      let resto = numA % numB;
      numA = numB;
      numB = resto; 
    }

    console.log(`O MDC é: ${numA}`);
    rl.close();
  });
});


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite a massa inicial em gramas: ', function(massaInicial) {
  let massa = parseFloat(massaInicial);
  let tempoTotalSegundos = 0;

  while (massa >= 0.5) {
    massa /= 2; 
    tempoTotalSegundos += 50; 
  }

  let horas = Math.floor(tempoTotalSegundos / 3600);
  let minutos = Math.floor((tempoTotalSegundos % 3600) / 60);
  let segundos = tempoTotalSegundos % 60;
  console.log(`Massa inicial: ${massaInicial} gramas`);
  console.log(`Massa final: ${massa.toFixed(4)} gramas`);
  console.log(`Tempo necessário: ${horas} horas, ${minutos} minutos e ${segundos} segundos`);
  rl.close();
});



let idadeBob = 41;
let idadeRenata = 18;
let anos = 0;

while (idadeBob < 2 * idadeRenata) {
  idadeBob++;
  idadeRenata++;
  anos+1;
}

console.log(`Após ${anos} anos, Bob terá ${idadeBob} anos e Renata terá ${idadeRenata} anos.`);



let contador = 0;  // Para contar quantos valores estão no intervalo
let i = 0;  // Contador para garantir que 10 valores sejam lidos

while (i < 10) {
  let valor = parseInt(leitura(`Digite o ${i + 1}º valor:`));
  
  if (valor >= 100 && valor <= 500) {
    contador++;  // Se o valor estiver entre 100 e 500, incrementa o contador
  }
  
  i++;  // Incrementa o contador de iterações
}

console.log(`Quantidade de valores entre 100 e 500: ${contador}`);



let a = 0;  
let b = 1;  
let count = 0; 

console.log("Série de Fibonacci:");

do {
  console.log(a);  
  let temp = a;
  a = b;
  b = temp + b;  
  count++;  
} while (count < 10);



let valorInicial = parseFloat(leitura("Digite o valor inicial do investimento:"));
let percentualLucro = parseFloat(leitura("Digite o percentual de lucro mensal (ex: 5 para 5%):"));
let meses = parseInt(leitura("Digite a quantidade de meses da aplicação:"));

let mes = 1;
let totalLucro = 0;

do {
  let lucroMes = valorInicial * (percentualLucro / 100);
  console.log(`Lucro do mês ${mes}: R$ ${lucroMes.toFixed(2)}`);
  totalLucro += lucroMes;
  valorInicial += lucroMes; 
  mes++;
} while (mes <= meses);

console.log(`Lucro total após ${meses} meses: R$ ${totalLucro.toFixed(2)}`);

let quantidade;

do {
  quantidade = parseInt(leitura("Digite a quantidade de alunos (menor que 5):"));
} while (quantidade >= 5 || quantidade <= 0);

let somaIdades = 0;
let contador = 1;

do {
  let idade = parseInt(leitura(`Digite a idade do aluno ${contador}:`));
  somaIdades += idade;
  contador++;
} while (contador <= quantidade);

let media = somaIdades / quantidade;
console.log(`A média das idades é: ${media.toFixed(2)}`);



let numero = 1;

do {
  let multiplicador = 1;
  console.log(`Tabuada do ${numero}:`);

  do {
    console.log(`${numero} x ${multiplicador} = ${numero * multiplicador}`);
    multiplicador++;
  } while (multiplicador <= 10);

  console.log("--------------");
  numero++;
} while (numero <= 10);


let numero = parseInt(leitura("Digite um número natural (inteiro positivo):"));

while (numero <= 0 || isNaN(numero)) {
  numero = parseInt(leitura("Valor inválido. Digite um número natural:"));
}

let i = 1;

while (i <= 10) {
  console.log(`${numero} x ${i} = ${numero * i}`);
  i++;
}


let x = 1;

do {
  console.log(x);
  x++;
} while (x <= 100);
 

let x = 10;

do {
  if (x % 2 === 0) {
    console.log(i);
  }
  x++;
} while (x <= 50);
 

let x = 10;

while (x <= 50) {
  if (x % 2 !== 0) {
    console.log(x);
  }
  x++;
}

*/
let x = 20;

do {
  console.log(x);
  x--;
} while (x >= 0);