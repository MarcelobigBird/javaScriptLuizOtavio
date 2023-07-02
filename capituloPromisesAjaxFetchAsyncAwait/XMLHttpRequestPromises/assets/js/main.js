// Jeito antigo de fazer requisições ajax
console.log('Exemplo 1');
console.log();

// const request = (obj) => {
//   const xhr = new XMLHttpRequest();  // eslint-disable-line

//   xhr.open(obj.method, obj.url, true);
//   xhr.send();

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.sucess(xhr.responseText);
//     } else {
//       obj.error(xhr.status);
//     }
//   });
// };

// document.addEventListener('click', (event) => {  // eslint-disable-line
//   const elem = event.target;
//   const tag = elem.tagName.toLowerCase();

//   if (tag === 'a') {
//     event.preventDefault();
//     carregaPagina(elem);  // eslint-disable-line
//   }
// });

// function carregaPagina(elem) {
//   const href = elem.getAttribute('href');

//   const objConfig = {
//     method: 'GET',
//     url: href,
//     sucess(response) {
//       carregaResultado(response);  // eslint-disable-line
//     },

//     error(errorText) {
//       console.log(errorText);
//     },
//   };

//   request(objConfig);
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');  // eslint-disable-line
//   resultado.innerHTML = response;
// }

console.log();
console.log('Exemplo 2');
console.log();

// const request1 = (obj) => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();  // eslint-disable-line

//   xhr.open(obj.method, obj.url, true);
//   xhr.send();

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       resolve(xhr.responseText);
//     } else {
//       reject(xhr.statusText);
//     }
//   });
// });

// document.addEventListener('click', (event) => {  // eslint-disable-line
//   event.preventDefault();
//   const elem = event.target;
//   const tag = elem.tagName.toLowerCase();

//   if (tag === 'a') {
//     carregaPagina(elem);  // eslint-disable-line
//   }
// });

// function carregaPagina(elem) {
//   const href = elem.getAttribute('href');

//   const objConfig = {
//     method: 'GET',
//     url: href,
//   };

//   request1(objConfig)
//     .then((response) => {
//       carregaResultado(response);  // eslint-disable-line
//     }).catch((error) => {
//       console.log(error);
//     });
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado'); // eslint-disable-line

//   resultado.innerHTML = response;
// }

console.log();
console.log('Exemplo 3');
console.log();

const request3 = (obj) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();  // eslint-disable-line

  xhr.open(obj.method, obj.url, true);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      resolve(xhr.responseText);
    } else {
      reject(xhr.statusText);
    }
  });
});

document.addEventListener('click', (event) => {  // eslint-disable-line
  event.preventDefault();
  const elem = event.target;
  const tag = elem.tagName.toLowerCase();

  if (tag === 'a') {
    carregaPagina(elem);  // eslint-disable-line
  }
});

async function carregaPagina(elem) {
  try {
    const href = elem.getAttribute('href');

    const objConfig = {
      method: 'GET',
      url: href,
    };

    const page = await request3(objConfig);
    carregaResultado(page);  // eslint-disable-line
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado'); // eslint-disable-line

  resultado.innerHTML = response;
}
