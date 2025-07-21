/*
 Exercicio 4 - Desafio A:
 Crie um sistema de classificação de notas: - 0 - 59: F - 60 - 69: D - 70 - 79: C - 80 - 89: B - 90 - 100: A
*/

let nota = 95;

if (nota <= 59) {
  console.log(`Sua nota é E: ${nota}`);
} else if (nota <= 69) {
  console.log(`Sua nota é D: ${nota}`);
} else if (nota <= 79) {
  console.log(`Sua nota é C: ${nota}`);
} else if (nota <= 89) {
  console.log(`Sua nota é B: ${nota}`);
} else if (nota >= 90) {
  console.log(`Sua nota é A: ${nota}`);
}
