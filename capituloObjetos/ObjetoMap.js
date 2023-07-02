const pessoas = [
  { id: 3, nome: 'Luiz' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
];

const novasPessoas = {};
for (let pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas[id] = { ...pessoa };
}

console.log(novasPessoas);
console.log();

const novasPessoas2 = new Map();

for (let { id, nome } of pessoas) {
  novasPessoas2.set(id, { id, nome });
}

console.log(novasPessoas2);
console.log();

const novasPessoas3 = new Map();

for (let pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas3.set(id, { ...pessoa });
}

console.log(novasPessoas3);
console.log(novasPessoas3.get(1));
console.log();

for (let [identifier, { id, nome }] of novasPessoas3) {
  console.log(identifier, { id, nome });
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
