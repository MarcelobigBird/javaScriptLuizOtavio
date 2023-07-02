console.log('Exemplo 1');
console.log();

const person = {
  firstName: 'Luiz',
  lastName: 'Otávio',
};

const key = 'firstName'; // Notação de colchete
console.log(person[key]);

console.log();
console.log('Exemplo 2');
console.log();

const person1 = new Object(); // eslint-disable-line
person1.firstName = 'Marcelo';
person1.lastName = 'Pereira dos Santos';
person1.age = 41;

person1.heSpeaks = function () {
  return `Eu me chamo ${this.firstName} ${this.lastName} tenho ${this.age} anos de idade.`;
};

person1.getDataNascimento = function () {
  const data = new Date();
  return `Eu nasci em ${data.getFullYear() - this.age}`;
};

console.log(person1.heSpeaks());
console.log(person1.getDataNascimento());

console.log();
console.log('Exemplo 3');
console.log();

// Constructor functions

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const p1 = new Person('Luiz', 'Otávio');
console.log(p1);

console.log();
// Factory functions

function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

const p2 = createPerson('Marcelo', 'Pereira dos Santos');
console.log(p2);
