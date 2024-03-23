/**
 * Hoisting com variáveis sem escopo definido.
 */

// Aqui o hoisting trás a declaração da variável para o topo, que será `undefined`.
console.log(nome1);
var nome1 = 'Fulano';

// Aqui o hoisting também trás a declaração da variável para o topo,
// mas como existe uma declaração com `let` que limita o escopo, o Node
// vai acusar erro.
console.log(nome2);
let nome2 = 'Beltrano';

// O mesmo acontece se usar `const`
console.log(nome3);
const nome3 = 'Ciclano';

/**
 * Hoisting dentro de escopos definidos.
 */

// Se declararmos uma variável com `var` em um escopo, ela continuará existindo
// fora dele, pois o hoisting trás a declaração para fora do escopo:
if (true) {
  var x = 10;
}
console.log(`O valor de x é ${x}.`);

// Mas se usarmos `var` ou `const`, a variável fica delimitada no escopo e não
// poderá ser acessada fora:
if (true) {
  let y = 20;
  let z = 30;
}
console.log(`O valor de y é ${y}.`);
console.log(`O valor de z é ${z}.`);
