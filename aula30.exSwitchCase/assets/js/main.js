// 1 opção de resolver o exercício com switch

// const getDayWeek = (diaSemana) => {

//     let diaSemanaTexto;

//     switch(diaSemana) {
//         case 0:
//             diaSemanaTexto = 'sunday';
//             break;
//         case 1:
//             diaSemanaTexto = 'monday'; 
//             break;
            
//         case 2:
//             diaSemanaTexto = 'tuesday'; 
//             break;
//         case 3:
//             diaSemanaTexto = 'wednesday';  
//             break;
//         case 4:
//             diaSemanaTexto = 'thursday'; 
//             break;
//         case 5:
//             diaSemanaTexto = 'friday';
//             break;
//         case 6:
//             diaSemanaTexto = 'saturday'; 
//             break;
//         default:
//             diaSemanaTexto = 'incorrect number'; 
//             break;
//     }

//     return diaSemanaTexto;
// }

// const getMes = (numberMonth) => {

//     let month;

//     switch(numberMonth) {
//         case 0:
//             month = 'january';
//             break;
//         case 1:
//             month = 'february'; 
//             break;
            
//         case 2:
//             month = 'march'; 
//             break;
//         case 3:
//             month = 'april';  
//             break;
//         case 4:
//             month = 'may'; 
//             break;
//         case 5:
//             month = 'june';
//             break;
//         case 6:
//             month = 'july'; 
//             break;
//         case 7:
//             month = 'augustju'; 
//             break;
//         case 8:
//             month =  'september';
//             break;
//         case 9: 
//             month = 'october';
//             break;
//         case 10: 
//             month = 'november';
//             break;
//         case 11: 
//             month = 'december';      

//     }

//     return month;
// }

// const zeroLeft = (num) => {
//     const numLeft = num >= 10 ? num : '0'+ num;
//     return numLeft;
// }

// const createDate = (data) => {   
    
//    const dayWeek = data.getDay();
//    const numberWeek = data.getMonth();

//    const nameDay = getDayWeek(dayWeek);
//    const nameMonth = getMes(numberWeek);

//    return `${nameDay}, ${data.getDate()} de ${nameMonth} de ${data.getFullYear()} ${zeroLeft(data.getHours())}:${zeroLeft(data.getMinutes())}:${zeroLeft(data.getSeconds())}`;

// }

// const h1 = document.querySelector('.container h1');
// const data = new Date();
// h1.innerHTML = createDate(data);


// 2 opção de resolver o exercício 

// const h1 = document.querySelector('.container h1');

// const data = new Date();

// h1.innerHTML = Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "medium" }).format(new Date())






