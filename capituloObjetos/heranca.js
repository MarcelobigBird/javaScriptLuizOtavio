// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (percentual) {
  const resultado = this.preco + (this.preco * (percentual / 100));  // eslint-disable-line 
  return `O valor do(a) ${this.nome} com aumento será R$${resultado.toFixed(2)} `;
};

Produto.prototype.desconto = function (percentual) {
  const resultado = this.preco - (this.preco * (percentual / 100));  // eslint-disable-line 
  return `O valor do(a) ${this.nome} com desconto será R$${resultado.toFixed(2)}`;
};

const produto = new Produto('Bermuda', 100);
console.log(produto);
console.log(produto.aumento(10));
console.log(produto.desconto(50));

console.log();
console.log('Exemplo 2');
console.log();

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percentual) {
  const resultado = this.preco + (this.preco * (percentual / 100));
  return `O valor do(a) ${this.nome} com aumento será R$${resultado.toFixed(2)}`;
};

const camiseta = new Camiseta('Regata', 15, 'Preta');
console.log(camiseta);
console.log(camiseta.aumento(100));
console.log(camiseta.desconto(50));

console.log();
console.log('Exemplo 3');
console.log();

function Caneca(nome, preco, cor, material, estoque) {
  Camiseta.call(this, nome, preco, cor);
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get() {
      return estoque;
    },

    set(value) {
      if (typeof value !== 'number') return;

      estoque = value; // eslint-disable-line
    },
  });
}

Caneca.prototype = Object.create(Camiseta.prototype);
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca('Caneca', 10, 'vermelha', 'plástico', 500);
caneca1.estoque = 1000;

console.log(caneca1);
console.log(caneca1.aumento(10));
console.log(caneca1.desconto(50));
