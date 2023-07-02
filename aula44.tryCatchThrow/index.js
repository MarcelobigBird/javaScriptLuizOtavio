function sum(num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') throw new Error('num1 e num2 precisam ser números');
    return `A soma dos números: ${ num1 + num2 }`;
}

try {
    console.log(sum(1, 3));
    console.log(sum('5', '5'));

} catch (error) {
    console.log(error); // você pode mostrar o erro ou capturar e mostrar outra mensagem
}