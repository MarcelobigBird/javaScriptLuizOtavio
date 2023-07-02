// Escreva uma função que receba um número e
// retorne o seguinte:
// Checar se o número é realmente um número
// Número é divisível por 3 e 5 = FizzBuzz
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número NÃO é divisível por 3 e 5 = retorna o próprio número
// Use a função com números de 0 a 100

const returnValueDivisible = (num) => {
    if(typeof num !== 'number') return num;
    if(num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if(num % 3 === 0) return 'Fizz';
    if(num % 5 === 0) return 'Buzz';
    return num;
}

console.log(returnValueDivisible(4));

for (let i = 0; i <= 100; i++) {
    console.log(i, returnValueDivisible(i));
}

