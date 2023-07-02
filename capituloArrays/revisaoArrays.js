console.log('Exemplo 1');
console.log();

const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'Mario';

console.log(nomes);

console.log();
console.log('Exemplo 2');
console.log();
// Valor por referência

const nomes1 = ['Joaquina', 'Eliana', 'Maria', 'Antônia'];
const novo = nomes1;

novo.pop();
console.log(nomes1);
console.log();
// Spread
// Faz uma cópia do array sem passar referência

const novo1 = [...nomes1];

novo1.pop();
console.log(novo1);
console.log(nomes1);

console.log();
console.log('Exemplo 3');
console.log();

const nomes2 = ['Paulo', 'Cesar', 'Antônio', 'Henrique'];

const removido = nomes2.shift();
console.log(removido);
console.log(nomes2);

console.log();
console.log('Exemplo 4');
console.log();

const nomes3 = ['Antônia', 'Paula', 'Julia', 'Catarina'];

const rmFinal = nomes3.pop();
console.log(rmFinal);

console.log();
console.log('Exemplo 5');
console.log();

const nomes4 = ['fusca', 'brasilia', 'voyage'];

nomes4.push('gol');
console.log(nomes4);

console.log();
console.log('Exemplo 6');
console.log();

const nomes5 = ['Rafaela', 'Núbia', 'Feiticeira', 'Sininho'];

nomes5.unshift('Antônia');
nomes5.unshift('Salete');

console.log(nomes5);

console.log();
console.log('Exemplo 7');
console.log();

let nomes6 = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

nomes6 = nomes6.slice(0, -1);
console.log(nomes6);

console.log();
console.log('Exemplo 8');
console.log();

const nome = 'Luiz Otávio Miranda';
const novoArray = nome.split(' ');
console.log(novoArray);

console.log();
console.log('Exemplo 9');
console.log();

const nome1 = ['Luiz', 'Otávio', 'Miranda'];
const novoNome = nome1.toString().replaceAll(',', ' '); // const novoNome = nome1.join(' ');
console.log(novoNome);
