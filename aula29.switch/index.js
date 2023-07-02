const data = new Date('2023-06-07 20:29:30');
const dayWeek = data.getDay();
let dayWeekText;

if(dayWeek === 0) {
    dayWeekText = 'Domingo';
} else if (dayWeek === 1) {
    dayWeekText = 'Segunda-feira';
} else if (dayWeek === 2) {
    dayWeekText = 'Terça-feira';
} else if (dayWeek === 3) {
    dayWeekText = 'Quarta-feira';
} else if (dayWeek === 4) {
    dayWeekText = 'Quinta-feira';
} else if (dayWeek === 5) {
    dayWeekText = 'Sexta-feira';
} else if (dayWeek === 6) {
    dayWeekText = 'Sabado';
}

console.log(dayWeekText);
console.log();


const data1 = new Date();
const diaSemana = data1.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case (0):
     diaSemanaTexto = 'Domingo';
     break;

     case (1):
     diaSemanaTexto = 'Segunda-feira';
     break;

     case (2):
     diaSemanaTexto = 'Terça-feira';
     break;

     case (3):
     diaSemanaTexto = 'Quarta-feira';
     break;

     case (4):
     diaSemanaTexto = 'Quinta-feira';
     break;

     case (5):
     diaSemanaTexto = 'Sexta-feira';
     break;

     case (6):
     diaSemanaTexto = 'Sábado';
     break;

     default:
        diaSemanaTexto = 'Vocẽ digitou um número incorreto';
}


console.log(diaSemanaTexto);


    


   
