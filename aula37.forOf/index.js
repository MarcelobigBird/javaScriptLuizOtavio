// for clássico -> usado com iteráveis (array ou strings)
// for in -> retorna o índice em array ou chave em objetos pode ser usado (string, array, objeto)
// for of -> não iterável em objetos, retorna o valor em si (array, strings)

const nomes = ['Luiz',  'Otávio', 'Henrique'];

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('******************************');

for (let key in nomes) {
    console.log(nomes[key]);
}

console.log('******************************');

for (let value of nomes) {
    console.log(value);
}

console.log('******************************');

const pessoa = [ nome = 'Luiz', sobrenome = 'Miranda', idade = 30 ];

for (let value of pessoa) {
    console.log(value);
}

console.log('******************************');

const person = {
    name: 'Marcelo',
    lastName: 'Santos',
    age: 41
};

for (let key in person) {
    console.log(key, person[key]); // for in funciona com objetos
}

console.log('******************************');

console.log(Object.keys(person));
console.log(Object.values(person));


