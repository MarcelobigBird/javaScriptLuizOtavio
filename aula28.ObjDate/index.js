// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// new Date(0) -> 01/01/1970 Timestamp unix ou época unix

const treeHours = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;

const data = new Date(0 + treeHours + oneDay);

console.log(data.toString()); 

// 1 maneira: De como mandar data como parametro para o constructor new Date()

const data1 = new Date(2021, 5, 7, 20, 18, 30, 500); // ano, mês, dia, hora, minuto, segundos, milisegundos
console.log(data1.toString());


// 2 maneira: De como mandar data como parametro para o constructor new Date()

const data2 = new Date('2021-06-07 20:29:30');
console.log(`Data2: ${data2}`);


// Como pegar Dia, Mês, Ano, Hora, Minuto, Segundos, Milisegundos, Dia da semana

const data3 = new Date();

console.log('Dia:', data3.getDate());
console.log('Mês:', data3.getMonth() + 1);
console.log('Ano:', data3.getFullYear());
console.log('Hora:', data3.getHours());
console.log('Minuto:', data3.getMinutes());
console.log('Segundos:', data3.getSeconds());
console.log('Milisegundos:', data3.getMilliseconds());
console.log('Dia da semana:', data3.getDay());

console.log(Date.now()); // Milisegundos do marco zero até a data atual em milisegundos
