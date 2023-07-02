console.log('Exemplo 1');
console.log();

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

// function conectarBd(msg, tempo, callback) {
//   setTimeout(() => {
//     console.log(msg);
//     if (callback) callback();
//   }, tempo);
// }

// conectarBd('Frase 1', rand(), () => {
//   conectarBd('Frase 2', rand(), () => {
//     conectarBd('Frase 3', rand(), () => {
//       console.log('Fim dos callback');
//     });
//   });
// });

console.log();
console.log('Exemplo 2');
console.log();

// const callback3 = () => {
//   console.log('Fim das callback');
// };

// const callback2 = () => {
//   conectarBd('Frase 3', rand(), callback3);
// };

// const callback1 = () => {
//   conectarBd('Frase 2', rand(), callback2);
// };

// conectarBd('Frase 1', rand(), callback1);

console.log();
console.log('Exemplo 3');
console.log();

function conectarBd1(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
      if (typeof msg !== 'string') {
        console.log('Error: BAD VALUE');
        reject(new TypeError('Error: BAD VALUE'));
      }
    }, tempo);
  });
}

conectarBd1('Conexão com o BD', rand(1, 5))
  .then((response) => {
    console.log(response);
    return conectarBd1('Buscando dados da BASE', rand(1, 5));
  })
  .then((response) => {
    console.log(response);
    return conectarBd1('Atualizando dados da BASE', rand(1, 5));
  })
  .then((response) => {
    console.log(response);
    return conectarBd1('Deletando dados da BASE', rand(1, 5));
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

console.log('Isso aqui será exibido antes de qualquer promise.');
