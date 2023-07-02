console.log('Exemplo 1');
console.log();

class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} está ligado.`);
    }
    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} está desligado.`);
    }

    this.ligado = false;
  }
}

const d1 = new DispositivoEletronico('iPhone');

console.log(d1);

d1.ligar();
d1.ligar();
console.log(d1);

d1.desligar();
d1.desligar();
console.log(d1);

console.log();
console.log('Exemplo 2');
console.log();

class Smartphone extends DispositivoEletronico {
  constructor(nome, modelo, cor) {
    super(nome);

    this.modelo = modelo;
    this.cor = cor;
  }
}

const s1 = new Smartphone('iPhone', 'Galaxy s10', 'preto');

console.log(s1);

s1.ligar();
s1.ligar();
console.log(s1);

console.log();
console.log('Exemplo 3');
console.log();

class Tablet extends DispositivoEletronico {
  constructor(nome, wifi) {
    super(nome);
    this.wifi = wifi;
  }

  ligar() {  // eslint-disable-line
    console.log('Olha você alterou o metódo ligar.');
  }
}

const t1 = new Tablet('iPad', true);

console.log(t1);
t1.ligar();
