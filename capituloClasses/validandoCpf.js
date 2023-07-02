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

class ValidaCpf {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      configurable: false,

      get() {
        return cpfEnviado.replace(/\D+/g, '');
      },
    });
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequence(this.cpfLimpo)) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);

    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  }

  criaDigito(cpfParcial) {  // eslint-disable-line 
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((acum, valor) => {
      acum += (regressivo * Number(valor));  // eslint-disable-line

      regressivo--; // eslint-disable-line
      return acum;
    }, 0);
    let digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  isSequence() {
    const sequence = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    return sequence === this.cpfLimpo;
  }
}

const cpfValido = new ValidaCpf('705.484.450-52');

if (cpfValido.valida()) {
  console.log('CPF VÁLIDO');
} else {
  console.log('CPF INVÁLIDO');
}

// 705.484.450-52  070.987.720-03
// 000.000.000-00  111.111.111-11
