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

class ValidaCpf {  // eslint-disable-line
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      writable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ''),
    });
  }

  valida() {
    if (!this.cpfLimpo) return false;
    if (typeof this.cpfLimpo !== 'string') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequence()) return false;
    this.geraNovoCpf();

    return this.novoCpf === this.cpfLimpo;
  }

  geraNovoCpf() {
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidaCpf.geraDigito(cpfParcial);
    const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1);

    this.novoCpf = cpfParcial + digito1 + digito2;
  }

  static geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;

    for (let stringNum of cpfSemDigitos) {
      total += (reverso * Number(stringNum));
      reverso--;  // eslint-disable-line 
    }
    let digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  isSequence() {
    return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
  }
}

// 705.484.450-52  070.987.720-03
// 000.000.000-00  111.111.111-11
