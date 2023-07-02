// forma literal de criar objetos

const person = {
    firstName: 'Luiz', 
    lastName: 'Miranda',
    age: 25
};

console.log(person.firstName );
console.log(person.lastName );
console.log(person.age );
console.log(person);

console.log();

const createPerson = (firstName, lastName, age) => {
    return {
        firstName,
        lastName,
        age
    }

}


const person1 = createPerson('Maria', 'Miranda', 65);
const person2 = createPerson('Marcelo', 'Santos', 65);
const person3 = createPerson('Edna', 'Silva', 65);

console.log(person1);
console.log(person2);
console.log(person3);

console.log();

const person4 = {
    firstName: 'Marcelo', 
    lastName: 'Pereira dos Santos', 
    age: 41,

    
    heSpeaks() {
        return `O meu nome é ${this.firstName} ${this.lastName} eu tenho ${this.age} anos de idade.`;
    },

    incrementAge() {
        return this.age++;
    }
};


 console.log(person4.heSpeaks());
 person4.incrementAge();
 console.log(person4.heSpeaks());
 person4.incrementAge();
 console.log(person4.heSpeaks());
 
 
