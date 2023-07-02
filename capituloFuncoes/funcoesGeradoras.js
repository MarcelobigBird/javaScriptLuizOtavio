console.log('Exemplo 1');
console.log();

function* geradora() {
  // Código qualquer
  yield 'valor 1';
  // Código qualquer
  yield 'valor 2';
  // Código qualquer
  yield 'valor 3';
}

const g1 = geradora();

console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

console.log();
console.log('Exemplo 2');
console.log();

const g2 = geradora();

for (const i of g2) {
  console.log(i);
}

console.log();
console.log('Exemplo 3');
console.log();

function* geradora1() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g3 = geradora1();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

console.log();
console.log('Exemplo 4');
console.log();

function* geradora2() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora3() {
  yield* geradora2();

  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora3();

for (const valor of g4) {
  console.log(valor);
}

console.log();
console.log('Exemplo 5');
console.log();

function* geradora4() {
  yield function () {
    console.log('Vim do y1');
  };

  yield function () {
    console.log('Vim do y2');
  };
}

const g5 = geradora4();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
