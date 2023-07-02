// IIFE -> Immeddiately invoked function expression
// Também pode ser passado parametros

(function (idade) {
  const sobrenome = 'Otávio Miranda';

  function criaNome(nome) {
    return `${nome} ${sobrenome} tem ${idade} anos.`;
  }

  function falaNome() {
    console.log(criaNome('Luiz'));
  }

  falaNome();
}(45));
