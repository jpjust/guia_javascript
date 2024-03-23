/**
 * Variáveis em JavaScript são dinamicamente tipadas, isto siginifica que
 * elas podem trocar o tipo do seu valor em tempo de execução. Em linguagens
 * estaticamente tipadas os tipos são definidos no código e atribuídos às
 * variáveis em tempo de compilação, impedindo a mudança de tipo em tempo
 * de execução.
 */
let x;

x = 10;
console.log(`x é um número e tem valor ${x}.`);

x = 'Just';
console.log(`x é uma string e tem valor ${x}.`);

x = true;
console.log(`x é um boleano e tem valor ${x}.`);

x = null;
console.log(`x é nulo e tem valor ${x}.`);
