// Some todos os números
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)
console.log('Exemplo 1');

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const sumNumbers = numeros.reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
}, 0);

console.log(sumNumbers);

console.log();
console.log('Exemplo 2');
// Simulando o filter com reduce

const returnNumbersPairs = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(returnNumbersPairs);

console.log();
console.log('Exemplo 3');
// Simulando o map com reduce

const arrayDouble = numeros.reduce((acumulador, valor) => {
  let numDouble = valor * 2;
  acumulador.push(numDouble);
  return acumulador;
}, []);
console.log(arrayDouble);

console.log();
console.log('Exemplo 4');
// Simulando filter com reduce no array de objetos
// Retorne a pessoa mais velha

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 155 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 47 },
];

const personOld = pessoas.reduce((ac, valor) => {
  if (ac.idade > valor.idade) return ac;
  return valor;
});

console.log(personOld);
