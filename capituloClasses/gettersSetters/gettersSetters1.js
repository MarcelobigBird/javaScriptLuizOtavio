class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');  // eslint-disable-line 
    const nome = valor.shift();

    this.nome = nome;
    this.sobrenome = valor.join(' ');
  }
}

const pessoa1 = new Pessoa('Luiz', 'Otávio Miranda');

pessoa1.nomeCompleto = 'Marcelo Pereira dos Santos';

console.log(pessoa1.nomeCompleto);
