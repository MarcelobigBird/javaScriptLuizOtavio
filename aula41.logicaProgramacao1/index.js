// Escreva uma função que recebe 2 números e retorne o maior deles

console.log('Exemplo 1');
console.log();

function returnMoreNumber(num1, num2) {
    const numberMore = num1 > num2 ? num1 : num2;
    return numberMore;
}


const more = returnMoreNumber(5, 10);
console.log(more);

console.log();
console.log('Exemplo 2');
console.log();

function retornaMaiorNumero(numero1, numero2) {
    if(numero1 > numero2) return numero1;
    return numero2;
}

console.log(retornaMaiorNumero(9, 6));

console.log();
console.log('Exemplo 3');
console.log();

const max  = (x, y) => x > y ? x : y;

console.log(max(5, 1));




