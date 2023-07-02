let person = {
    firstName: 'Luiz', 
    lastName: 'Miranda',
    age: 30,
    address: {
        road: 'Rua merino',
        number: 37,
        district: 'Jd. Julieta',
        city: 'São Paulo'
    }
};


// Atribuição via desestruturação
person['address']['cep'] = '02161-140';


const { firstName, lastName, age } = person;

console.log('Exemplo1: ' + firstName, lastName, age);

console.log('***** Exemplo 2 ******')

const { address: { road, number }, address } = person;
console.log('Exemplo2: ' + road, number, address);


console.log('***** Exemplo 3 ***********')

const { firstName: nome, lastName: sobrenome, ...rest } = person;
console.log('Exemplo3: ' + nome, sobrenome, rest);
