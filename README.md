# Guia de referência básico JavaScript

Este guia foi escrito pelo Prof. M.Sc. João Paulo Just Peixoto como um guia de referência básico para estudantes do curso de Bacharelado em Sistemas de Informação do IFBA Feira de Santana.

O guia acompanha alguns pequenos trechos de código na pasta `referencias` com exemplos de uso do JavaScript básico.

## Node.js

## Começando seu programa em JavaScript

Para programar em JavaScript basta escrever seu código em um editor de textos. Dê preferência a um editor que suporte codificação UTF-8 (VS Code, Atom, Notepad++, etc.). Após escrever seu código, salve o arquivo com a extensão .js.

Para executar você deve chamar seu programa via linha de comando usando o ambiente do Node.js da forma abaixo.

```bash
node arquivo.js
```

No JavaScript usamos chaves para delimitar os escopos. Os escopos funcionam para agrupar um bloco de código em situações necessárias. Por exemplo, caso queiramos executar um bloco de código em um condicional, precisaremos delimitar um escopo. Sempre que for abrir um novo escopo para um bloco de código dentro de um condicional por exemplo, você deve abrir chaves logo após o condicional, inserir seu código e fechar as chaves logo após o fim do bloco. Não se preocupe, veja os exemplos de código abaixo para entender como o escopo funciona no JavaScript.

falar do ; e dos comentários

## Saída de texto

Para exibir texto na tela usamos o `console.log()`. `console` é um objeto padrão no JavaScript que permite acessar o console de depuração (geralmente o console do inspetor nos navegadores em geral ou o terminal em ferramentas de linha de comando). Este objeto tem uma função chamada `log()` que nos permite exibir texto na saída padrão do console. Veja um exemplo:

```javascript
console.log('Olá, mundo!');
```

O código acima irá exibir a mensagem `Olá, mundo!` no console, seja ele um terminal, caso esteja executando o programa via Node.js, ou o inspetor do navegador, caso esteja executando dentro de uma página HTML. Repare que todo texto literal deve vir entre apóstrofos ('') ou aspas ("").

Também é possível exibir números no console:

```javascript
console.log(12);
```

## Variáveis

JavaScript é uma linguagem dinamicamente tipada, o que significa que as variáveis têm tipos, mas os tipos podem ser alterados durante a execução do programa. Além disso, não é preciso fazer declarações dos tipos das variáveis.No caso do JavaScript, uma variável pode ter um tipo e depois ter outro tipo. Veja o exemplo:

```javascript
var x = 100;
var dobro = x * 2;
console.log(dobro); // Exibe na tela o número 200
x = 'João';
console.log(x);     // Exibe na tela a string 'João'
```

Perceba que a variável `x` mudou de tipo. Ela recebeu um valor inteiro (`100`) na sua declaração e em seguida recebeu uma string (`João`). Isto não seria possível em uma linguagem estaticamente tipada.

Caso queiramos exibir o valor de uma variável dentro de um texto literal devemos escrever o texto entre `` e usar `${}` para exibir o valor da variável:

```javascript
var x = 100;
var dobro = x * 2;
console.log(`O dobro de ${x} é ${dobro}.`);
```

let e const

## Funções

Funções em JavaScript podem ser declaradas para agrupar um bloco de código e chamá-lo posteriormente. Para declarar uma função em JavaScript usamos a instrução `function` seguida do nome da função e dos seus argumentos entre parênteses. O escopo da função é delimitado com chaves.

```javascript
function saudacao() {
  console.log('Olá, estudante!');
  console.log('Esta é nossa primeira função.');
}
```

Após a declaração da função chamamos ela pelo nome declarado:

```javascript
saudacao();
```

Assim como a maioria das linguagens, podemos definir argumentos. Basta inserir os nomes de variáveis que serão utilizadas para guardar os valores dos argumentos dentro dos parênteses. Também é possível retornar valores com a instrução `return`:

```javascript
function media(a, b) {
  return (a + b) / 2;
}

const m = media(4, 9);
```

## Funções seta (arrow functions)

Há uma outra forma de declarar funções, através de nomes de variáveis, que é chamada de _arrow functions_ (tradução livre: funções seta). Neste caso, em vez de usar a instrição `function`, declaramos a função como uma variável ou uma constante:

```javascript
const soma = (a, b) => {
  return a + b;
}

console.log(soma(2, 3));
```

A função acima executa apenas uma linha de código e pode ser simplificada ainda mais:

```javascript
const soma = (a, b) => a + b;
console.log(soma(2, 3));
```

Mais detalhes em: https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/

## Entrada de texto

Para fazer a leitura de um valor digitado pelo usuário, usamos o módulo `readline` do Node.js. Este módulo exige a criação de uma interface de entrada e saída para que possamos usar uma função que irá solicitar o valor ao usuário. A função `question()` recebe dois parâmetros:

1. O prompt que será exibido na tela.
2. Uma função com um parâmetro contendo o texto digitado pelo usuário, que irá tratar a entrada.

Veja o exemplo:

```javascript
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Qual seu nome? ', nome => {
  console.log(`Olá, ${nome}! Seja bem-vindo(a).`);
  rl.close();
});
```

No exemplo acima o módulo `readline` é solicitado através da instrução `require()`. Em seguida, a interface é criada e armazenada na constante `rl`. Por último, usamos `question()` passando o prompt e uma função seta que recebe o nome como argumento (variável `nome`) e exibe uma mensagem via `console.log()`. A interface é fechada ao final da função.

A entrada de texto é utilizada mais frequentemente em programas de linha de comando. Ao utilizar uma framework web ou mobile usaremos a interface gráfica para solicitar dados do usuário.

## Condicionais

Os condicionais em JavaScript são semelhantes às outras linguagens. Usamos a instrução `if` seguida de uma expressão boleana entre parênteses:

```javascript
let nome = 'Fulano';
let idade = 20;

if (idade >= 18) {
  console.log(`${nome} é maior de idade.`);
} else {
  console.log(`${nome} é menor de idade.`);
}
```

Assim como as outras linguagens, JavaScript possui `else if` e `else`:

```javascript
let nome = 'Fulano';
let idade = 20;

if (idade >= 18) {
  console.log(`${nome} é maior de idade.`);
} else if (idade >= 0 && idade < 18) {
  console.log(`${nome} é menor de idade.`);
} else {
  console.log('Idade negativa.');
}
```

Os operadores boleanos do JavaScript são:

| Op. | JavaScript | Exemplo                   |
| :-: | :--------: | --------------------------|
| E   | &&         | `if (x >= 10 && x <= 20)` |
| OU  | \|\|       | `if (x < 10 \|\| x > 20)` |
| NÃO | !          | `if (x % 2 != 0)`         |

E os operadores relacionais são:

| Op.            | JavaScript | Exemplo             |
| :------------: | :--------: | --------------------|
| Igual          | ==         | `if (res == true)`  |
| Diferente      | !=         | `if (res != false)` |
| Maior          | >          | `if (x > 0)`        |
| Maior ou igual | >=         | `if (x >= 0)`       |
| Menor          | <          | `if (x < 0)`        |
| Menor ou igual | <=         | `if (x <= 0)`       |

## Repetição `while`

O laço de repetição `while` irá repetir um bloco de instruções enquanto a condição for verdadeira. A condição é uma expressão boleana que é avaliada sempre antes de próxima execução do bloco de instruções. Ao se tornar falsa, o bloco encerra a repetição.

```javascript
let n = 10;
console.log('Contagem regressiva...');

while (n >= 0) {
  console.log(n);
  n--;
}
```

O bloco a seguir inicia com `n = 10` e repete enquanto o valor for maior ou igual a zero. A cada repetição o valor de `n` é decrementado. Assim que o valor atinge `-1`, a expressão `n >= 0` não é mais verdadeira e a repetição encerra;

## Repetição `do..while`

## Repetição `for`

## Repetição `for..in`

## Repetição `for..of`

## `switch`

## `try..catch`

## Funções assíncronas

## Objetos

## Arrays

## `map()`

## `reduce()`

## `forEach()`
