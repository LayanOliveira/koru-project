
console.log("Koru Project - Conditionals");
console.log("==============DIGITE SUA NOTA============");
    
const nota = ("Digite sua nota: ");
const notas = parseInt(nota);

if (nota >= 0 && nota <= 59) {
  console.log(" SUA CLASSIFICACÃO É F");
} else if (nota >= 60 && nota <= 79) {
  console.log(" SUA CLASSIFICACÃO É D");
} else if (nota >= 80 && nota <= 89) {
  console.log(" SUA CLASSIFICACÃO É B");
} else if (notas >= 90 && notas <= 100) {
  console.log(" SUA CLASSIFICACÃO É A");
}