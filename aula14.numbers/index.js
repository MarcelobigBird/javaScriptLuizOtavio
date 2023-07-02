let num1 = 10; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2);
console.log(typeof num1); // não muda o valor de num1

num1 = num1.toString();
console.log(typeof num1); // agora o valor de num1 foi alterado

console.log(num1.toString(2)) // mostra o valor binário do número que está armazenado na variável num1

let numero = 10.578955125547
console.log(numero.toFixed(2));

console.log(Number.isInteger(numero)) // verifica se um numero é inteiro retorna um boolean 

let temp = num1 * 'Ola';
console.log(temp); // retorna um NaN não tem como multiplicar um número com uma string

console.log(Number.isNaN(temp)); // verifica se a conta é um NaN retorna um boolean


let numero1 = 0.7;
let numero2 = 0.1;

numero1 += numero2; // 0.8
numero1 += numero2; // 0.9
numero1 += numero2; // 1.0

 
numero1 = parseFloat(numero1.toFixed(2)); // isso resolve a imprecisão 
console.log(numero1);
console.log(Number.isInteger(numero1));

