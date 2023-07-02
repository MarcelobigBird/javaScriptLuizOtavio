console.log();
console.log('Exemplo 1');
console.log();

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao('Luiz');
const funcao1 = retornaFuncao('Marcelo');

console.log(funcao());
console.log(funcao1());

console.log();
console.log('Exemplo 2');
console.log();

function retornaFuncao1() {
  const nome = 'Paulo';

  return function () {
    return nome;
  };
}

const fn = retornaFuncao1();
console.log(fn());
