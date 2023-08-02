
let alturaPedro = 1.50;
let alturaLucas = 1.10;
const crescimentoPedro = 0.02;
const crescimentoLucas = 0.03;
let anos = 0;

for (let i = 0; alturaLucas <= alturaPedro; i++) {
  alturaPedro += crescimentoPedro;
  alturaLucas += crescimentoLucas;
  anos = i;
}

document.write(`a. Lucas e Pedro tenham o mesmo tamanho: ${alturaPedro + alturaLucas + anos}</p>`);
document.write(`a. b. Lucas seja maior que Pedro. ${alturaPedro + alturaLucas + anos}`);

// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.
