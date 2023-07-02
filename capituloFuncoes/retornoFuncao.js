console.log();
console.log('Exemplo 1');
console.log();

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 2));

console.log();
console.log('Exemplo 2');
console.log();

function criaPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otávio');

const p2 = { nome: 'João', sobrenome: 'Oliveira' };

console.log(p1);
console.log(p2);

console.log();
console.log('Exemplo 3');
console.log();

function falaFrase(comeco) {
  function falaResto(resto) {
    return `${comeco} ${resto}`;
  }
  return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);

console.log();
console.log('Exemplo 4');
console.log();

function criaMultiplicador(multiplicador) {
  // multiplicador está nesse escopo
  return function (numero) {
    return numero * multiplicador;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
