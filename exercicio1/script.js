// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;

let menorAltura = Infinity;
let maiorAltura = -Infinity;


for (let i = 1; i <= 15; i++) {
    let alturaPessoas = parseFloat(prompt(`Digite as Alturas ${i}:`)) ;
    if (alturaPessoas < menorAltura) {
        menorAltura = alturaPessoas 
    }
    if (alturaPessoas > maiorAltura) {
      maiorAltura = alturaPessoas
} 
}
Document.write(`a. A menor altura do grupo é: ${menorAltura.toFixed(2)} metros.`)
Document.write(`a. A maior altura do grupo é: ${maiorAltura.toFixed(2)} metros`)
   


// for (let i = 1; i <= 15; i++) {
//     const altura = parseFloat(prompt(`Informe a altura da pessoa ${i}:`))
//         if (altura < menorAltura) {
//             menorAltura = altura
//         }
//         if (altura > maiorAltura) {
//             maiorAltura = altura
//         }
// }
// document.write(`a. A menor altura do grupo é: ${menorAltura.toFixed(2)} metros.<br>`)
// document.write(`b. A maior altura do grupo é: ${maiorAltura.toFixed(2)} metros.`)