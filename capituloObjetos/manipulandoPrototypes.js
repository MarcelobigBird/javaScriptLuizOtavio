console.log('Exemplo 1');
console.log();

const objA = {
  chaveA: 'A',
};

const objB = {
  chaveB: 'B',
};

const objC = new Object();  // eslint-disable-line
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objA);
console.log(objB);
console.log(objC);

console.log();
console.log('Exemplo 2');
console.log();

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  return `O produto ${this.nome} terá um valor de R$ ${(this.preco - (this.preco * (percentual / 100))).toFixed(2)}`;
};

Produto.prototype.acrescimo = function (percentual) {
  return `O produto ${this.nome} terá um valor de R$ ${(this.preco + (this.preco * (percentual / 100))).toFixed(2)}`;
};

const produto = new Produto('lápis', 10);
console.log(produto);

console.log(produto.desconto(50));
console.log(produto.acrescimo(30));

console.log();
console.log('Exemplo 3');
console.log('Nesse exemplo produto2 herdou os metódos de desconto, acrescimo de Produto');
console.log();

const produto2 = { nome: 'Caneca', preco: 15 };
Object.setPrototypeOf(produto2, Produto.prototype);

console.log(produto2);
console.log(produto2.desconto(10));
console.log(produto2.acrescimo(50));

console.log();
console.log('Exemplo 4');
console.log();
// Você também pode criar o objeto é setar o prototype dele

const produto3 = Object.create(Produto.prototype, {
  nome: {
    value: 'Blusa',
    enumerable: true,
    writable: true,
    configurable: true,
  },
  preco: {
    value: 200,
    enumerable: true,
    writable: true,
    configurable: true,
  },
});

console.log(produto3);
console.log(produto3.desconto(10));
