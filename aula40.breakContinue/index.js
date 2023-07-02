// Continue continua para a proxima iteração do laço
// Break sai fora do laço

const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    if (numero === 2 || numero === 5) {
        continue;
    }
    console.log(numero);
}



console.log();
console.log('**********************************');
console.log();

for (numero of numeros) {
    if (numero % 2 === 0) continue;
    console.log(numero);
}

console.log();
console.log('**********************************');
console.log();


for (let numero of numeros) {    
    if (numero === 7) {
        console.log('encontrei o 7 é sai do laço.');
        break;
    }
    console.log(numero);
}

console.log();
console.log('**********************************');
console.log();

let i = 0;

while (i < numeros.length) {
   
   if (numeros[i] === 2) {
    console.log('pulei o numero 2.')
    i++;
    continue;
   }
   
   if (numeros[i] === 7) {
    console.log('encontrei o 7 e sai do laço.')
       i++;
       break;
    }
    
    console.log(numeros[i]);
    i++;
}