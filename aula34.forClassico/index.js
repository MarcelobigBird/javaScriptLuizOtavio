console.log('Exemplo 1');
console.log();

for (let i = 0; i <= 500; i += 50) {
    console.log(`Linha ${i}`);
}

console.log();
console.log('Exemplo 2');
console.log();

for (let i = 100; i >= 0; i -= 10) {
    console.log(`Linha ${i}`);
}

console.log();
console.log('Exemplo 3');
console.log();

for (let i = 0; i <= 10; i++) {
    if(i % 2 === 0) continue;
    console.log( i + ' Número impar');
}

console.log();
console.log('Exemplo 4');
console.log();

for (let i = 0; i <= 10; i++) {
    let par = i % 2 === 0;
    console.log(i, par);
}

console.log();
console.log('Exemplo 5');
console.log();

for (let i = 0; i <= 10; i++) {
    let numero = i % 2 === 0 ? ' par' : ' impar ';
    console.log(i, numero);
}

console.log();
console.log('Exemplo 6');
console.log();

const fruits = ['apple', 'pear', 'orange', 'grape', 'mango', 'lemon'];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Ìndice ${i}: ${ fruits[i] }`);
}

console.log();

for (let i = fruits.length - 1; i >= 0; i--) {
    console.log('Indice ' + i + ':', fruits[i]);
}

