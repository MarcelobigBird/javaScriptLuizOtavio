const toSpeak = {
  toSpeak() {
    console.log(`${this.firstName} ${this.lastName} está falando.`);
  },
};

const toDrink = {
  toDrink() {
    console.log(`${this.firstName} ${this.lastName} está bebendo.`);
  },
};

const eat = {
  eat() {
    console.log(`${this.firstName} ${this.lastName} está comendo.`);
  },
};

const personPrototype = Object.assign({}, toSpeak, toDrink, eat);

function createPerson(firstName, lastName) {
  return Object.create(personPrototype, {
    firstName: { value: firstName },
    lastName: { value: lastName },
  });
}

const p1 = createPerson('Luiz', 'Otávio Miranda');
console.log(p1);

p1.toSpeak();
p1.toDrink();
p1.eat();
