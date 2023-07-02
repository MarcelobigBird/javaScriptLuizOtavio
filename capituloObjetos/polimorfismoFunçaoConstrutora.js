function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (saque) {
  if (this.saldo < saque) {
    console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);

    return;
  }

  this.saldo -= saque;
  this.verSaldo();
};

Conta.prototype.depositar = function (deposito) {
  this.saldo += deposito;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(`ag/c: ${this.agencia}/${this.conta}`);
  console.log(`Saldo: R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valorSaque) {
  if (valorSaque > (this.saldo + this.limite)) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    return;
  }

  this.saldo -= valorSaque;
  this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente('0771', '42416-5', 0, 100);
console.log(cc);

cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new ContaPoupanca('0072', '64985-8', 0);
console.log(cp);

cp.depositar(10);
cp.sacar(110);
cp.sacar(1);
