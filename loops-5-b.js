//5-b) Crie um array de números e calcule a soma deles usando um loop
const numeros = [1, 2, 3, 4, 5];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("A soma dos números é: " + soma);