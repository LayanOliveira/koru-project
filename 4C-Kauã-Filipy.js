const temHabilitacao = true; // Variável booleana indicando se o usuário tem habilitação
const idade = 19;            // Idade do usuário

// Condicional para verificar se o usuário pode dirigir
if (idade >= 18 && temHabilitacao === true) {
    console.log("Está apto a dirigir");
    // Se a idade for maior ou igual a 18 E tiver habilitação, exibe a mensagem de aptidão
} else {
    console.log("Não está apto para dirigir!");
    //Senão , exibe que não está apto
}
