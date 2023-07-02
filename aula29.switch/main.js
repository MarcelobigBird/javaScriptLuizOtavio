const returnDayWeek = (dayWeek) => {
    let dayWeekText;
 
        if(dayWeek === 0)  return dayWeekText = 'Domingo';
        if(dayWeek === 1)  return dayWeekText = 'Segunda-feira';
        if(dayWeek === 2)  return dayWeekText = 'Terça-feira';
        if(dayWeek === 3)  return dayWeekText = 'Quarta-feira';
        if(dayWeek === 4)  return dayWeekText = 'Quinta-feira';
        if(dayWeek === 5)  return dayWeekText = 'Sexta-feira';
        if(dayWeek === 6)  return dayWeekText = 'Sabado';       
       
    }

    const data = new Date(2023, 05, 08, 22, 51, 30);
    const day = data.getDay();

    console.log(day, returnDayWeek(day));
    console.log();



    const returnoDiaSemana = (diaSemana) => {

        let diaSemanaTexto;

        switch(diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo';
                break;
            case 1:
                diaSemanaTexto = 'Segunda-feira'; 
                break;
                
            case 2:
                diaSemanaTexto = 'Terça-feira'; 
                break;
            case 3:
                diaSemanaTexto = 'Quarta-feira';  
                break;
            case 4:
                diaSemanaTexto = 'Quinta-feira'; 
                break;
            case 5:
                diaSemanaTexto = 'Sexta-feira';
                break;
            case 6:
                diaSemanaTexto = 'Sabado'; 
                break;
            default:
                diaSemanaTexto = 'numero incorreto'; 
                break;
        }

        return diaSemanaTexto;
    }


    const data1 = new Date('2023-06-11 00:31:30');
    const dia = data1.getDay();
    const diaSemanaTexto = returnoDiaSemana(dia)

   console.log(dia, diaSemanaTexto);