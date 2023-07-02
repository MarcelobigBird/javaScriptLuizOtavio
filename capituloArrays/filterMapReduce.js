// Retorne o soma do dobro dos pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const sumDoublePairs = numeros.filter((valor) => valor % 2 === 0).map((num) => num * 2).reduce((acumulador, valor) => acumulador += valor, 0);
console.log(sumDoublePairs);
