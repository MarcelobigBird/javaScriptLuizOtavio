// Filter -> Sempre retorna um novo array, com a mesma quantidade de elementos ou menos dependendo
// da verificação

// Retorne os números maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const returnMore = (num) => num > 10;
const numMore = numeros.filter(returnMore);

console.log(numMore);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const ageMore = (valor) => valor.idade > 50;
const nameMoreFive = (obj) => obj.nome.length >= 5;
const endsA = (obj) => obj.nome.toLowerCase().endsWith('a');

const nameMore = pessoas.filter(nameMoreFive);
console.log(nameMore);

const personMoreAge = pessoas.filter(ageMore);
console.log(personMoreAge);

const nameEndsA = pessoas.filter(endsA);
console.log(nameEndsA);
