// Operadores lógicos
const isOfAge = true; 
const hasLicense = false; 

//Estrutura Condicional
if (isOfAge && hasLicense) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}

// Operador ternário
const canDrive = isOfAge && hasLicense ? "Pode dirigir" : "Não pode dirigir";
console.log("Status:", canDrive);
