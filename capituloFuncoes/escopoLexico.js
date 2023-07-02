const nome = 'Luiz';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome1 = 'Otávio';  // eslint-disable-line
  falaNome();
}

usaFalaNome();
