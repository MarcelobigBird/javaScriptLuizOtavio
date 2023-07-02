// Factory Function

console.log('Exemplo 1');
console.log();

function criaPessoa(nome, sobrenome, altura, peso) {
  return {

    fala(assunto) {
      return `${nome} ${sobrenome} está ${assunto}.`;
    },

    calculaImc() {
      return `O seu imc é de ${(peso / (altura ** 2)).toFixed(2)}`;
    },
  };
}

const p1 = criaPessoa('Luiz', 'Otávio Miranda', 1.80, 80);
console.log(p1.fala('aprendendo js com o Prof: Otávio'));
console.log(p1.calculaImc());

console.log();
console.log('Exemplo 2');
console.log();

function criaPessoa1() {
  return {
    nome: 'Marcelo',
    sobrenome: 'Pereira dos Santos',

    fala() {
      return `O meu nome é ${this.nome}.`;
    },

    get nomeCompleto() {
      return `O meu nome é ${this.nome} ${this.sobrenome}`;
    },

    // set nomeCompleto(nome) {
    //   nome = nome.split(' ');
    //   const [nome1, ...sobrenome1] = nome;
    //   this.nome = nome1;
    //   this.sobrenome = sobrenome1.join(' ');
    // },

    set nomeCompleto(nome) {
      nome = nome.split(' ');
      const indice0 = nome.shift();
      this.nome = indice0;
      this.sobrenome = nome.join(' ');
    },

  };
}

const p2 = criaPessoa1();
console.log(p2.fala());
console.log(p2.nomeCompleto); // Getter

p2.nomeCompleto = 'Luiz Otávio Miranda'; // Setter
console.log(p2.nomeCompleto);
