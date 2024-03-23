/**
 * Para solicitar um texto da entrada padrão (`process.stdin`), também conhecida
 * como "teclado", precisamos do módulo `readline` do Node.js. Com este módulo
 * criaremos uma interface de entrada e saída para depois usar a função `question()`,
 * que recebe um prompt e uma função que será executada (a função tem um parâmetro
 * que é justamente o texto que o usuário digitou).
 */
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Qual seu nome? ', nome => {
  console.log(`Olá, ${nome}! Seja bem-vindo(a).`); // Para exibir variáveis usamos ${} dentro de ``
  rl.close();
});
