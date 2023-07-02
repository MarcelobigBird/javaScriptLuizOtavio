// Object.defineProperty para configurar uma propriedade
console.log('Exemplo 1');
console.log();

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave se for true
    value: estoque, // valor
    writable: false, // não pode alterar o valor se for false e pode alterar se for true
    // eslint-disable-next-line
    configurable: false, // pode configurar o atributo se for true e não pode configurar se for false
  });
}

const p1 = new Produto('Camiseta', 20, 500);
console.log(p1);

console.log(Object.keys(p1));

console.log();
console.log('Exemplo 2');
console.log();

// Object.defineProperties para configurar várias propriedades

function Person(firstName, lastName, age) {
  Object.defineProperties(this, {
    firstName: {
      enumerable: true,
      value: firstName,
      writable: false,
      configurable: false,
    },
    lastName: {
      enumerable: true,
      value: lastName,
      writable: false,
      configurable: false,
    },
    age: {
      enumerable: true,
      value: age,
      writable: false,
      configurable: false,
    },
    heSpeaks: {
      enumerable: true,
      value() {
        return `Eu sou ${this.firstName} ${this.lastName} tenho ${this.age} anos.`;
      },
      writable: false,
      configurable: false,
    },
  });
}

const person = new Person('Luiz', 'Otávio', 45);

console.log(person.heSpeaks());
