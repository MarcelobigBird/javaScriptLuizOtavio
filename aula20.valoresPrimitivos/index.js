/**
 * Primitivos - (imutáveis) -> string, number, boolean, undefined, null (bigint, symbol) // Os valores são copiados
 * 
 *  Referência (mutável) ->  array, object, function // Os valores são passados por referência
 */

let nome = 'Luiz';
console.log(nome[0]);

console.log();

let a = 'A';
let b = a;  // cópia
console.log(a, b);

a = 'Outra coisa';
console.log('a: ' + a, 'b: ' + b);

console.log();
let arrayA = [1, 2, 3];
let arrayB = arrayA; // referência
let arrayC = arrayB; // referência

console.log('arrayA: ' + arrayA, 'arrayB: ' + arrayB);

arrayA.push(4);
console.log('arrayA: ' + arrayA, 'arrayB: ' + arrayB);

arrayB.pop();
console.log('arrayB: ' + arrayB, 'arrayA ' + arrayA);

arrayA.push('Luiz');
console.log(arrayC);


console.log();

// Para não ficar apontando para o mesmo lugar na memória. Usar o operador spread

let array = ['Maria', 'Ana', 'Joana'];

let array1 = [...array];

console.log(array, array1);

array.push('Otaviano');
console.log(array, array1);
