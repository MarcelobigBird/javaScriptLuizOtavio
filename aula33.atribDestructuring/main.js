function destructuringObjeto({ firstName, lastName, age, address }) {
    console.log(firstName, lastName, age);
}


const person = {
    firstName: 'Luiz',
    lastName: 'Otávio Miranda',
    age: 30,
    address: {
        road: 'Av. Brasil',
        number: 37,
        cep: '02161-140'      
       
    }
}

person['address']['district'] = 'Penha';
person.address.city = 'Rio de janeiro' ;

console.log(person);
console.log();

destructuringObjeto(person);
