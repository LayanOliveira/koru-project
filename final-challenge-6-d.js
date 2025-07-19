//Resolução do Exercício 6 - Desafio - D

// d) Encontre o aluno com a maior média

//tabela dos alunos com a media calculada
const alunosComMedia = [
  { nome: "João", media: 84.33 },
  { nome: "Maria", media: 92.00 },
  { nome: "Pedro", media: 71.67 },
  { nome: "Ana", media: 67.67 },
  { nome: "Carlos", media: 90.00 }
];

// O Aluno com a maior média é:

let alunoComMaiorMedia = alunosComMedia[0];

for (let i = 1; i < alunosComMedia.length; i++) {
    const alunoAtual = alunosComMedia[i];
    
    if (alunoAtual.media > alunoComMaiorMedia.media) {
        alunoComMaiorMedia = alunoAtual; 
    }
}

console.log(" Aluno com a maior média: ");
console.log(`${alunoComMaiorMedia.nome} - Média: ${alunoComMaiorMedia.media.toFixed(2)}`);