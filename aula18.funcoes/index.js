function saudacao(nome) {
    console.log('Good morning ' + nome + '!');
    return 123456;
};

const variavel = saudacao('Marcelo');
console.log(variavel);

function salutation(firstName) {
    return 'Bom dia ' + firstName + '!.'
}

const retornoVariavel = salutation('João');
console.log(retornoVariavel);


function sum(x, y) {
    const resultado = x + y;
    return resultado;
};

console.log(sum(2, 3));
console.log(sum(10, 30));
console.log(sum(5, 5));


const root = function(num) {
    return num ** 0.5
};

console.log(root(9));
console.log(root(16));
console.log(root(25));

const multiplica = num => num * 5;
console.log(multiplica(2));
console.log(multiplica(5));
console.log(multiplica(6));