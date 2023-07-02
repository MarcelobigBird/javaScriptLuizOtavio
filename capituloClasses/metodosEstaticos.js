class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de instância
  aumentarVolume() {
    this.volume += 5;
  }

  diminuirVolume() {
    this.volume -= 5;
  }

  // Método estático
  static trocaPilha() {
    console.log('Ok, vou trocar.');
  }
}

const controle1 = new ControleRemoto('Samsung');

console.log(controle1);

for (let i = 0; i < 20; i++) {  // eslint-disable-line
  controle1.aumentarVolume();
}

console.log(controle1);

ControleRemoto.trocaPilha();
