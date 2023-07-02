// Promise.all -> resolve todas as promessas e entrega todas de uma vez
console.log('Exemplo 1');
console.log();

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function conectarBd(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') {
      reject(new Error('Você precisa digitar uma string'));
      return;
    }

    setTimeout(() => {
      resolve(`${msg.toUpperCase()} - Passei na promise`);
    }, tempo);
  });
}

const promises = [
  'Primeiro valor',
  conectarBd('Promise 1', rand(1, 5)),
  conectarBd('Promise 2', rand(1, 5)),
  conectarBd('Promise 3', rand(1, 5)),
  'Último valor',
];

// Promise.all(promises)
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

console.log();
console.log('Exemplo 2');
console.log();

function conectarBd1(msg, tempo) {
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

const promises1 = [
  conectarBd1('Promise 1', rand(1, 5)),
  conectarBd1('Promise 2', rand(1, 5)),
  conectarBd1('Promise 3', rand(1, 5)),
  conectarBd1(1000, rand(1, 5)),
];

// Promise.rice -> Entrega a primeira promessa resolvida

Promise.race(promises1)
  .then((valor) => {
    console.log(valor);
  })
  .catch((error) => {
    console.log(error);
  });
