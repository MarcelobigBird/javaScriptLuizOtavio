// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import

import multiplica, {
  soma, nome, sobrenome, idade,
} from './modulo1';

console.log('Multiplica: ', multiplica(5, 5));

console.log(nome, sobrenome, idade);

console.log(soma('Soma: ', 5, 5));
