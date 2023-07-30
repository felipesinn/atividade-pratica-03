// 1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
// programa deverá calcular e mostrar:
// a. A menor altura do grupo;
// b. A maior altura do grupo;
let contador = 1;
let menorAltura = 0;
let maiorAltura = 0;
while (contador <= 5){
    let altura =parseFloat(prompt(`digite sua altura ${contador}`));

    if (altura < maiorAltura){
        menorAltura = altura;
    }
    if (altura > maiorAltura){
        maiorAltura = altura; 
    }
    contador++
}
document.write(`a. A menor altura do grupo é: ${menorAltura.toFixed(2)}</p>`);
document.write(`b. A maior altura do grupo é: ${maiorAltura.toFixed (2)}`);