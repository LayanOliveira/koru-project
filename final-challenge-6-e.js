/*
Exercicio 6 Desafio C:
c) Conte quantos alunos foram aprovados e quantos foram reprovados
*/

// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];
let gradesAll = [];
students.forEach((student) => {
  const averageGrade =
    student.grades.reduce(
      (partialGrade, currentGrade) => partialGrade + currentGrade,
      0
    ) / student.grades.length;
  gradesAll.push(Math.floor(averageGrade));
});

const averageAll =
  gradesAll.reduce(
    (partialAverageAll, currentAverage) => partialAverageAll + currentAverage,
    0
  ) / gradesAll.length;

console.log(Math.floor(averageAll));
