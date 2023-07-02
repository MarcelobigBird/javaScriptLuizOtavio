// Promise.resolve -> Entrega uma promessa já resolvida

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function conectarBd2(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject(new Error('Você precisa digitar uma string'));
        return;
      }
      resolve(`${msg.toUpperCase()} - Passei na promise`);
    }, tempo);
  });
}

function baixaPagina() {
  const isCache = false;

  if (isCache) {
    return Promise.resolve('Página em cache');
  }
  return conectarBd2('Baixei a página', rand(1, 5));
}

baixaPagina()
  .then((dados) => {
    console.log(dados);
  }).catch((error) => {
    console.log(error);
  });
