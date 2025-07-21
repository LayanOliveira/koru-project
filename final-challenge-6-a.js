// Desafio final - integrando todos os conceitos

// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
  //   { name: "Testerino", age: 23, grades: [] },
];

// Resposta

const calculateAverage = students.map((student) => {
  const total = student.grades.reduce(
    (acumulator, grade) => acumulator + grade,
    0
  );
  const media = total / student.grades.length; // > 0
  // ? total / student.grades.length
  // : undefined;
  // Do > para cá verifica se o aluno tem nota, se não tiver vai ser pego pelo else lá em baixo
  return { ...student, media };
});
let averageResult = "Médias:\n";

calculateAverage.forEach((student) => {
  if (student.media !== undefined) {
    averageResult += `${student.name}: ${student.media.toFixed(2)}\n`;
  } else {
    averageResult += `${student.name} Não disponível`;
  }
});

console.log(averageResult);
// Desafios

// a) Para cada aluno, calcule a média das notas
// b) Determine se cada aluno foi aprovado ou reprovado (média >= 70 para aprovar)
// c) Conte quantos alunos foram aprovados e quantos foram reprovados
// d) Encontre o aluno com a maior média
// e) Calcule a média geral da turma

// Use console.log() para mostrar todos os resultados com mensagens claras
