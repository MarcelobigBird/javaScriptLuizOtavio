class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} ${this.sobrenome} está falando.`);
  }
}

console.log();
console.log('Exemplo 2');
console.log();

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} ${this.sobrenome} está falando.`);
};

const p1 = new Pessoa('Luiz', 'Otávio Miranda');
const p2 = new Pessoa2('Maria', 'Luiza Miranda');

console.log(p1);
console.log(p2);
