// function getHourFromSeconds(seconds) {
//   const data = new Date(seconds * 1000);
//   return data.toLocaleTimeString('pt-BR', {
//     hour12: false,
//     timeZone: 'UTC' // OU 'GMT
//   });
// }

// const clock = document.querySelector('.clock');
// const start = document.querySelector('.start');
// const pause = document.querySelector('.pause');
// const reset = document.querySelector('.reset');
// let second = 0;
// let  resetTimer = 0;
// let timer;

// function startClock() {
//     timer = setInterval(() => {
//     second++;
//     clock.innerHTML = getHourFromSeconds(second);
//   }, 1000);
// }

// function stopClock() {
//   clearInterval(timer);
//   return;

// }

// function resetClock() {
//   clearInterval(timer);
//   clock.innerHTML = '00:00:00';
//   return;
// }

// start.addEventListener('click', () => {
//   clock.classList.remove('pausado');
//   clearInterval(timer);
//   startClock();

// });

// pause.addEventListener('click', () => {
//   clock.classList.add('pausado');
//   clearInterval(timer);
//   stopClock();
// });

// reset.addEventListener('click', () => {
//   clock.classList.remove('pausado');
//   clearInterval(timer);
//   second = 0;
//   resetClock();
// });

// outra forma de fazer é adicionar um addEventListener para todos os botões


function relogio() {

  function pegarHoraSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-br', { hour12: false, timeZone: 'UTC' })
  }
  
  const clock = document.querySelector('.clock');
  
  let segundos = 0
  let timer;
  
  function iniciaRelogio() {
    timer = setInterval(() => {
      segundos++
      clock.innerHTML = pegarHoraSegundos(segundos)
    }, 1000)
  }
  
  
  document.addEventListener('click', e => {
    const elemento = e.target;
  
    if (elemento.classList.contains('start')) {
      iniciaRelogio();
      clock.classList.remove('pausado');
    }
  
    if (elemento.classList.contains('pause')) {
      clearInterval(timer);   
      clock.classList.add('pausado');
    }
  
    if (elemento.classList.contains('reset')) {
      clearInterval(timer);    
      clock.innerHTML = '00:00:00';
      clock.classList.remove('pausado');
      segundos = 0;
    }
  })
  
}
relogio();

