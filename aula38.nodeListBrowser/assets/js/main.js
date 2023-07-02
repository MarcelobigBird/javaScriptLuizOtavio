// como selecionar a cor do body, alterar o background da tag p, e alterar o color da tag p;


const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgroundColorBody = estiloBody.backgroundColor;

console.log(backgroundColorBody);

for (let p of ps) {
   p.style.backgroundColor = backgroundColorBody;
   p.style.color = 'white';
}


