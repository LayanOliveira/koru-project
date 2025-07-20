//Resolução do Exercício 5 - desafio C

//c) Crie um loop que identifique o menor valor em um array de números

// menor valor 

const valores = [88, 3, 19, 4, 99];
let menor = valores[0];

for (let i = 1; i < valores.length; i++) {
    if (valores[i] < menor) {
        menor = valores[i];
    }
}

console.log("Menor valor encontrado:", menor);