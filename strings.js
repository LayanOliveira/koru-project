//Resolução do Exercício - 2-A

// Desafio 2-A: Extraindo o primeiro nome de uma string

const nomeCompleto = "Maria Silva";

// Usando slice, pegamos do índice 0 até a posição do espaço
const espacoIndex = nomeCompleto.indexOf(" "); // encontra onde está o espaço
const primeiroNome = nomeCompleto.slice(0, espacoIndex); // do início até o espaço

console.log("Primeiro nome (usando slice):", primeiroNome);

// Usando o substring funciona igual ao slice.
const primeiroNomeSubstring = nomeCompleto.substring(0, espacoIndex);
console.log("Primeiro nome (usando substring):", primeiroNomeSubstring);