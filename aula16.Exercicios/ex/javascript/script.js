/** Essa foi a minha solução */

// const numero = Number(prompt('Digite um número:'));
// const numbersTitle = document.querySelector('#numero-titulo');

// numbersTitle.innerHTML = numero;

// const raizQuadrada = document.querySelector('#raiz');
// raizQuadrada.innerHTML = Math.sqrt(numero);

// const numbers = document.querySelector('#numero');
// const numbersInteger = document.querySelector('#inteiro');

// numbers.innerHTML = numero;
// numbersInteger.innerHTML = Number.isInteger(numero);

// const account = document.querySelector('#conta-valida');
// account.innerHTML = Number.isNaN(numero);

// const low = document.querySelector('#para-baixo');
// low.innerHTML = Math.floor(numero);

// const up = document.querySelector('#para-cima');
// up.innerHTML = Math.ceil(numero);

// const twoHouse = document.querySelector('#duas-casas');
// twoHouse.innerHTML = numero.toFixed(2);

const numero = Number(prompt('Digite o seu número:'));
const numeroTitulo = document.querySelector('#numero-titulo');
const texto = document.querySelector('#texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`
texto.innerHTML += `<p>${numero ** 0.5} é inteiro: ${Number.isInteger(numero)}.</p>`
texto.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(numero)}.</p>`
texto.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(numero)}.</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`