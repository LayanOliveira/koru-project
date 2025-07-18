// Modo 1

// Exercícios de manipulação de strings

// 1. Declaração e concatenação
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName.replace("Silva", "Jascripto");
console.log("Nome completo:", fullName);

// 2. Template strings (ES6)
const greeting = `Olá, meu nome é ${firstName} ${lastName.replace(
  "Silva",
  "Jascripto"
)}!`;
console.log(greeting);

// 3. Propriedades e métodos de strings
console.log("Comprimento do nome:", fullName.length);
console.log("Nome em maiúsculas:", fullName.toUpperCase());
console.log("Nome em minúsculas:", fullName.toLowerCase());

// Desafios
// a) Extraia o primeiro nome usando o método slice ou substring 
// b) Verifique se o nome completo contém a letra 'a' 
// c) Substitua "Silva" por outro sobrenome usando replace