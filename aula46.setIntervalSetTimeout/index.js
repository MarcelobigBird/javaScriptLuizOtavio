function showHours() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

const timer = setInterval(() => {
  console.log(showHours());
}, 1000);



setTimeout(() => {
  clearInterval(timer);
  console.log('Interrompi o intervalo depois de 3 segundos.');
}, 3000);


setTimeout(() => {
  console.log("Hello world!!!");
}, 5000);