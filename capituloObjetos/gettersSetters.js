// defineProperty -> Getters e Setters

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: true,

    get() {
      return estoquePrivado;
    },

    set(valor) {
      if (typeof valor !== 'number') throw new TypeError('String invalid');
      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto('Camiseta', 20, 500);
p1.estoque = 1000;
console.log(p1.estoque);
