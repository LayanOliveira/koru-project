//Resolução do Exercício 3-b
//// Desafio - Converter a string "123.45" em um número

////Uma constante com o valor de uma string que representa um número
const numberAsString = "123.45";

// Mostra no console o valor da string e o tipo dela (que é "string")
console.log("Antes de Converter:", numberAsString, typeof numberAsString);

// Converte a string para número usando a função Number() e guarda na variável convertedNumber
const convertedNumber = Number(numberAsString);

// Mostra no console o valor convertido e o tipo dele (que agora é "number")
console.log("Depois de Converter:", convertedNumber, typeof convertedNumber);
