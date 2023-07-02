// 3 opção de resolver o exercício

function getDiaSemanaTexto(diaSemana) {
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
    return diasSemana[diaSemana];
}


function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[numeroMes];
}

const zeroLeft = (num) => {
    const numLeft = num >= 10 ? num : '0'+ num;
    return numLeft;
}


const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = `${getDiaSemanaTexto(data.getDay())}, ${data.getDate()} de ${getNomeMes(data.getMonth())} de ${data.getFullYear()} ${zeroLeft(data.getHours())}:${zeroLeft(data.getMinutes())}:${zeroLeft(data.getSeconds())}`;