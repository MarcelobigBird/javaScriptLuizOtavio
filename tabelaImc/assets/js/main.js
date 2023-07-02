// Capturar o evento de submit do formulário

const form = document.querySelector('#formulario');


form.addEventListener('submit', e => {
    e.preventDefault();

   const inputWeight = e.target.querySelector('#peso');
   const inputHeight = e.target.querySelector('#altura');

  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  if (!weight) {
    setResult('Invalid weight', false);
    return;
  }

  if (!height) {
    setResult('Invalid height', false);
    return;
  }
  const imc = getImc(weight, height); 
  
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResult(msg, true);
 
})

const getNivelImc = (imc) => {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 40) return nivel[5];
    if (imc >= 35) return nivel[4];
    if (imc >= 30) return nivel[3];
    if (imc >= 25) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
   
    return imc;
}

const getImc = (weight, height) => {
    const imc = weight / height ** 2;   
     return  imc.toFixed(2);    

} 


const createParagraph = () => {         
    const paragraph = document.createElement('p');   
    return paragraph;
}


const setResult = (msg, isValid) => {
    const response = document.querySelector('#resultado');
    response.innerHTML = '';

    const paragraph = createParagraph();
    isValid ? paragraph.classList.add('paragraph-success') : paragraph.classList.add('paragraph-error');
    
    paragraph.innerHTML = msg;
    response.appendChild(paragraph);    
    return response;
}
