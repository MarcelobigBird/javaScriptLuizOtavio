/*
  Object.values
  Object.entries
  Object.assign(destino, any)
  Object.getOwnPropertyDescriptor(o, 'prop')
  ...(spread)

   Já vimos
   Object.keys (retorna as chaves)
   Object.freeze (congela o objeto)
 */

// Copiar um objeto sem passar referência (Object.assign)

console.log('Como copiar um objeto para outra variável sem passar referência.');

console.log();
console.log('Exemplo 1');
console.log();

const obj = { nome: 'Marcelo', sobrenome: 'Pereira dos Santos' };
const obj1 = { ...obj, age: 41 };

console.log(obj);
console.log(obj1);

console.log();
console.log('Exemplo 2');
console.log();

const product = { name: 'Camiseta', price: 1.8 };

const product1 = Object.assign({}, product, { material: 'porcelana' });

console.log(product);
console.log(product1);

console.log();
console.log('Exemplo 3');
console.log();

const pessoa = { nome: 'Luiz', sobrenome: 'Otávio Miranda' };
const pessoa1 = { nome: pessoa.nome, sobrenome: pessoa.sobrenome };

console.log(pessoa);
console.log(pessoa1);

console.log();
console.log('Object.keys retorna um array com as chaves do objeto.');
console.log('Exemplo 4');
console.log();

const produto = { nome: 'Produto', preco: 1.8 };

console.log(Object.keys(produto));

console.log();
console.log('Object.freeze congela o objeto: ele não pode ser alterado.');
console.log();

const produto1 = { nome: 'Bermuda', preco: 2.0 };

Object.freeze(produto1);

produto1.nome = 'Camiseta';

console.log(produto1);

console.log();
console.log('Exemplo 5');
console.log();

const produto2 = { nome: 'Jaqueta', preco: 20, cor: 'azul' };
Object.defineProperty(produto2, 'nome', {
  value: 'bermuda',
  writable: false,
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(produto2, 'nome'));

delete produto2.nome;

console.log(produto2);

console.log();
console.log('Exemplo 6');
console.log();

const produto3 = { nome: 'Blusa', preco: 30, cor: 'vermelho' };

console.log(Object.values(produto3));

console.log();
console.log('Exemplo 7');
console.log();

const produto4 = { nome: 'relógio', preco: 50, cor: 'amarelo' };

console.log(Object.entries(produto4));

// Usando destructuting no for of

// for (const [key, value] of Object.entries(produto4)) {
//   console.log(key, value);
// }
