const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  get velocidade() {
    console.log('GETTER');
    return this[_velocidade];
  }

  set velocidade(valor) {
    console.log('SETTER');
    if (typeof valor !== 'number') return;
    if (valor <= 0 || valor > 100) return;

    this[_velocidade] = valor;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    return this[_velocidade]++;  // eslint-disable-line
  }

  desacelerar() {
    if (this[_velocidade] <= 0) return;
    return this[_velocidade]--;  // eslint-disable-line
  }
}

const carro = new Carro('fusca');

console.log(carro);
carro.velocidade = 10;
console.log(carro.velocidade);

for (let i = 0; i <= 200; i++) {    // eslint-disable-line
  carro.acelerar();
}

console.log(carro);

for (let i = 200; i >= 0; i--) {  // eslint-disable-line
  carro.desacelerar();
}

console.log(carro);

console.log(carro.velocidade);
