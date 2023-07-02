
//               01234567
let umaString = 'Um texto';

console.log(umaString.concat(' ', 'explicando sobre javascript.'))
console.log(umaString + ' explicando sobre javascript.')
console.log(`${umaString} explicando sobre javascript.`)

console.log(umaString.length);
console.log(umaString.indexOf('texto'));

console.log(umaString.replace('Um', 'Outro').concat(' explicando sobre javascript.'));

console.log();
let texto = 'O rato roeu a roupa do rei de roma.';

console.log(texto.replace('roma', 'portugal'))
console.log(texto.replace(/r/g, '#'));



console.log();

console.log(texto.slice(2,  6));
console.log(texto.slice(-5, -1));
console.log(texto.substring(texto.length - 5, texto.length - 1));


console.log();

console.log(texto.split(' '));

console.log();

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());

