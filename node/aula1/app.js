// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;

// console.log(falaNome());

// const { name, firstName, falaNome } = require('./mod1');
// console.log(name, firstName);
// console.log(falaNome());

const path = require('path');
const axios = require('axios');

// classes

// const { Pessoa } = require('./mod1');
// const p1 = new Pessoa('Luiz');
// console.log(p1); 


axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(e => console.log(e));