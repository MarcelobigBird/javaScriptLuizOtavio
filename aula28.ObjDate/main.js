function zeroLeft(num) {
    return num >= 10 ? num : `0${num}`;    
}
const formatDate = () => {
    const data = new Date();
    const dataAtual = `Ano: ${zeroLeft(data.getFullYear())}, Mês: ${zeroLeft(data.getMonth() + 1)}, Dia: ${zeroLeft(data.getDate())}, Hora: ${zeroLeft(data.getHours())}, Minutos: ${zeroLeft(data.getMinutes())}, Segundos: ${zeroLeft(data.getSeconds())}, Milisegundos: ${zeroLeft(data.getMilliseconds())}`;
    return dataAtual;
}

console.log(formatDate('2021-06-07 20:29:30:500'));

console.log()
console.log()

function formataData(data) {
   const day = zeroLeft(data.getDate());
   const month = zeroLeft(data.getMonth() + 1);
   const year = zeroLeft(data.getFullYear());
   const hour = zeroLeft(data.getHours());
   const minute = zeroLeft(data.getMinutes());
   const second = zeroLeft(data.getSeconds());

   return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);