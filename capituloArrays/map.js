console.log('Exemplo 1');
// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numDouble = numeros.map((num) => num * 2);
console.log(numDouble);

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

console.log('Exemplo 2');
console.log();

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const returnString = pessoas.map((obj) => obj.nome);
console.log(returnString);

// const removeKeyName = pessoas.map((obj) => {
//   delete obj.nome;
//   return obj;
// });

// Outra forma de fazer e retornando outro objeto com a chave idade

const removeKeyName = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(removeKeyName);

// Dessa forma você altera o array de objeto original
// Arrays são passado por referência

// const addKeyId = pessoas.map((obj, indice) => {
//   obj.id = indice + 1;
//   return obj;
// });

// Desse 2 forma você não altera o array de objeto original

const addKeyId = pessoas.map((obj, indice) => {
  const newObj = { ...obj };
  newObj.id = indice + 1;
  return newObj;
});

console.log(addKeyId);
console.log(pessoas);
