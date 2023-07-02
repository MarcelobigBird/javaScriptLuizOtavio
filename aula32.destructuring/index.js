let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

// ...rest quando usado no sentido de pegar o resto de array, objeto
// ...spread quando usado no sentido de espalhar coisas no array, objeto

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];

const [primeiroNumero, segundoNumero, terceiroNumero, ...restoNumeros] = numeros;

console.log(primeiroNumero, segundoNumero, terceiroNumero);
console.log(...restoNumeros);

console.log();

const [one, , tree, , five, , seven, , nine] = numeros

console.log(one, tree, five, seven, nine);
console.log();


const arrayNumeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

const [primeiroArray, segundoArray, terceiroArray] = arrayNumeros;

console.log(primeiroArray[0], segundoArray[0], terceiroArray[0]);
console.log();


const [, , [, , nove]] = arrayNumeros;
console.log(nove);
