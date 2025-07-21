// Exercício 6 -B 
// Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)

// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

// Iterando sobre a lista de alunos
// e verificando a média de cada um
for (let i = 0; i < students.length; i++) {
  const student = students[i];

  // Calculando a média das notas
  const grades = student.grades;
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  const average = total / grades.length;

  // Verificação de aprovação ou reprovação
  if (average >= 70) {
    console.log(`${student.name} aprovado com média ${average.toFixed(1)}.`);
  } else {
    console.log(`${student.name} reprovado com média ${average.toFixed(1)}.`);
  }
}


