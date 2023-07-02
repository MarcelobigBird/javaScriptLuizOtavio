// Função construtora -> retorna objetos
// Função construtora -> por convenção ela inicia com a palavra maiúscula
// Função construtora -> precisa ser instancia com a palavra reservada new

function Pessoa(nome, sobrenome) {
  // Atributos ou metódos privados
  let id = 123456;

  let validaId = function () {
    if (id === 123456) {
      return true;
    }
    return false;
  };

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.fala = function () {
    if (validaId()) {
      return `${this.nome + this.sobrenome} foi logado com sucesso na base de dados.`;
    }
    return `${this.nome} ${this.sobrenome} não foi logado na base de dados.`;
  };
}

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1.fala());
console.log(p2.fala());
