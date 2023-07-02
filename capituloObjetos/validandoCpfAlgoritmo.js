/*
    7x  0x  5x  4x  8x  4x  4x  5x  0x
    10  9   8   7   6   5   4   3   2
    70  0   40  28  48  20  16  15  0 = 237

    11 - (237 % 11) = 5 -> (Primeiro dígito)
    Se o número for maior que 9, consideramos 0.

    7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
    11  10  9   8   7   6   5   4   3   2
    77  0   45  32  56  24  20  20  0   10 = 284

    11 - (284 % 11) = 2 (Segundo dígito)
     Se o número for maior que 9, consideramos 0.
*/

// const cpf = '705.484.450-52';

// Duas formas de tirar os pontos e o traço da string de cpf

// console.log(cpf.replaceAll('.', '').replace('-', ''));
// console.log(cpf.replace(/\D+/g, ''));

// Transformando uma string de números em array

// const cpfArray = Array.from(cpf);
// console.log(cpfArray);

// 705.484.450-52  070.987.720-03
// 000.000.000-00  111.111.111-11


// Exercício validando cpf

function ValidandoCpf(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    get() {
      return cpfEnviado.replace(/\D+/g, '');
    },
  });
}

ValidandoCpf.prototype.valida = function () {
  if (this.cpfLimpo === 'undefined') return false;
  if (this.cpfLimpo.length > 11) return false;
  if (this.isSequence()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);

  const digitOne = this.criaDigito(cpfParcial);
  const digitTwo = this.criaDigito(cpfParcial + digitOne);

  const newCpf = cpfParcial + digitOne + digitTwo;
  return this.cpfLimpo === newCpf;
};

ValidandoCpf.prototype.criaDigito = function (cpfParcial) {
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;

  let total = cpfArray.reduce((ac, valor) => {
    ac += (regressivo * Number(valor));  // eslint-disable-line 

    regressivo--;  // eslint-disable-line

    return ac;
  }, 0);

  const digitOne = (11 - (total % 11));
  return digitOne > 9 ? '0' : String(digitOne);
};

ValidandoCpf.prototype.isSequence = function () {
  const sequence = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequence === this.cpfLimpo;
};

const cpf = new ValidandoCpf('000.000.000-00');

if (cpf.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}

