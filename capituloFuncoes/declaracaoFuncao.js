// Declaração de função (Function hoisting)
console.log('Exemplo 1');

saudacao();

function saudacao() {
  console.log('Hello world!!!');
}

// First-class objects (Objeto de primeira classe)
// Function expression
console.log();
console.log('Exemplo 2');
console.log();

const souUmDado = () => console.log('Sou um dado');

function executaFuncao(funcao) {
  funcao();
}

executaFuncao(souUmDado);

console.log();
console.log('Exemplo 3');
console.log();

const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};

funcaoArrow();

console.log();
console.log('Exemplo 4');
console.log();

const obj = {
  nome: 'Marcelo',

  fala() {
    console.log(`${this.nome} está falando.`);
  },
};

obj.fala();
