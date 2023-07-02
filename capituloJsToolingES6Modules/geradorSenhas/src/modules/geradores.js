const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiusculas = () => String.fromCharCode(rand(65, 91));
const geraMinusculas = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));

const simbolos = ['!', '@', '#', '$', '%', '¨', '&', '*', '(', ')', '-', '_', '+', '=', '"', ':', ';', '^', '~', '[', ']', '{', '}', '/', '?'];

const geraSimbolos = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtidade, maiusculas, minusculas, numeros, simbolo) {
  let senhaArray = [];

  qtidade = Number(qtidade);   // eslint-disable-line
  for (let i = 0; i < qtidade; i++) {  // eslint-disable-line
    maiusculas && senhaArray.push(geraMaiusculas());
    minusculas && senhaArray.push(geraMinusculas());
    numeros && senhaArray.push(geraNumeros());
    simbolo && senhaArray.push(geraSimbolos());
  }

  return senhaArray.join('').slice(0, qtidade);
}
