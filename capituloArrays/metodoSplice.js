console.log('Exemplo 1');
console.log();

// metódo splice(índiceAtual, delete, elem1, elem2, elem3);
// pop

//              -5       -4      -3         -2         -1
//              0        1       2          3          4
let nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

const removidos = nomes.splice(3, 2);
console.log(nomes, removidos);

console.log();
console.log('Exemplo 2');
console.log();

let nomes1 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

const removidos1 = nomes1.splice(4, 0, 'Marcelo');
console.log(nomes1, removidos1);

console.log();
console.log('Exemplo 3');
console.log();

let nomes2 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const removidos3 = nomes2.splice(3, 2, 'Luiz', 'Otávio');
console.log(nomes2, removidos3);

console.log();
console.log('Exemplo 4');
console.log();

let nomes3 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Simulando a função pop()que retira o último elemento do array
const pop = nomes3.splice(-1, 1);
console.log(nomes3, pop);

console.log();
console.log('Exemplo 5');
console.log();

let nomes4 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Simulando a funcao shift que retira o primeiro elemento do array
const removeElem1 = nomes4.splice(0, 1);
console.log(removeElem1, nomes4);

console.log();
console.log('Exemplo 6');
console.log();

let nomes5 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Simulando a função unshift que add elemento no primeiro indice do array
nomes5.splice(0, 0, 'Astrogildo');
console.log(nomes5);

console.log();
console.log('Exemplo 7');
console.log();

let nomes6 = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// Simulando a função push que add elemento no primeiro índice do array
nomes6.splice(nomes6.length, 0, 'Hellon');
console.log(nomes6);
