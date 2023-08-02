
let quantidadeNumeros = 10;
let soma = 0;
let quantidadePositivos = 0;
let quantidadeNegativos = 0;

for (let i = 1; i <= quantidadeNumeros; i++) {
  let numero = parseFloat(prompt(`Digite o ${i} número:`));

  if (isNaN(numero)) {
    console.log(`Valor inválido. Certifique-se de digitar um número válido.`);
    i--; 
  } else {
    soma += numero;

    if (numero > 0) {
      quantidadePositivos++;
    } else if (numero < 0) {
      quantidadeNegativos++;
    }
  }
}

let mediaAritmetica = soma / quantidadeNumeros;
let percentualPositivos = (quantidadePositivos / quantidadeNumeros) * 100;
let percentualNegativos = (quantidadeNegativos / quantidadeNumeros) * 100;

console.log(`Média Aritmética: ${mediaAritmetica.toFixed(2)}`);
console.log(`Quantidade de valores positivos: ${quantidadePositivos}`);
console.log(`Quantidade de valores negativos: ${quantidadeNegativos}`);
console.log(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%`);
console.log(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%`);


// 7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores
// positivos, a quantidade de valores negativos e o percentual de
// valores negativos e positivos.