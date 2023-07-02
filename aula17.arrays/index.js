//               0        1        2
const alunos = ['Luiz', 'Maria', 'João'];

console.log(alunos[0]);
console.log(alunos[2]);

alunos[0] = 'Marcelo';
console.log(alunos);

alunos.push('Eduardo');
alunos.push('Fábio'); // push adiciona um elemento no fim do array

alunos.unshift('Otávio');
alunos.unshift('Leonardo'); // unshift adiciona um elemento no começo do array
console.log(alunos);


alunos.pop() // remove o ultimo elemento do array
console.log(alunos);

alunos.shift() // remove o primeiro elemento do array
console.log(alunos);

console.log(typeof alunos);
console.log(alunos instanceof Array);

let alunos1 = ['Luiz', 'Paula', 'Cleide'];
alunos1 = 123;

console.log(alunos1 instanceof Array);

let alunos2 = ['Luiz', 'Paula', 'Cleide', 'Priscila', 'Talita'];
delete alunos2[2]; // deleta o elemento mas não altera os indices
console.log(alunos2);


