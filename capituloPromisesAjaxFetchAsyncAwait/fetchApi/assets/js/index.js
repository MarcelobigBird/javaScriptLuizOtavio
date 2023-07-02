console.log('Exemplo 1');
console.log();

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

//   fetch(href)
//     .then((response) => {
//       if (response.status !== 200) throw new Error('Error: 404');
//       return response.text();
//     })
//     .then((responseText) => carregaResultado(responseText))  // eslint-disable-line
//     .catch((error) => console.log(error));
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');  // eslint-disable-line
//   resultado.innerHTML = response;
// }

console.log();
console.log('Exemplo 2');
console.log();

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
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('Error: 404!');

    const html = await response.text();
    carregaResultado(html);  // eslint-disable-line
  } catch (error) {
    console.log(error);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');  // eslint-disable-line
  resultado.innerHTML = response;
}
