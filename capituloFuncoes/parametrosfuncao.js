console.log();
console.log('Exemplo 1');
console.log();

/* Funções com a palavra function tem uma variável especial arguments que recebe todos os
   argumentos enviados
   Funções arrow não tem a variável especial arguments
*/

// function funcao() {
//   let resultado = 0;
//   for (let argument of arguments) {
//     if (typeof argument !== 'number') continue;

//     resultado += argument;
//   }
//   console.log(resultado);
// }

// funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log();
console.log('Exemplo 2');
console.log();

function funcao1(a, b, c, d) {
  console.log(a, b, c, d);
}

funcao1(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log();
console.log('Exemplo 3');
console.log();

function funcao2(a, b, c, d, e, f, g) {
  console.log(a, b, c, d, e, f, g);
}

funcao2(1, 2, 3, 4);

console.log();
console.log('Exemplo 4');
console.log();

function funcao3(a, b = 2, c = 4) {
  console.log(a + b + c);
}

funcao3(2);

console.log();
console.log('Exemplo 4');
console.log();

function funcao4({ firstname, lastname, age }) {
  console.log(firstname, lastname, age);
}

let obj = {
  firstname: 'Luiz',
  lastname: 'Otávio Miranda',
  age: 45,
};

funcao4(obj);

console.log();

function funcao5([valor1, valor2]) {
  console.log(valor1, valor2);
}

const array = ['Marcelo', 'Luiz', 'Rafael'];
funcao5(array);

console.log();
console.log('Exemplo 5');
console.log();

function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador -= numero;
  }
  console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
