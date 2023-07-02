// Escreva uma função chamada ePaisagem que 
// recebe dois argumentos, largura e altura
// de uma imagem (number).
// retorna true se a imagem estiver no modo 
// paisagem

console.log();
console.log('Exemplo 1');
console.log();

function ePaisagem(largura, altura) {
    const paisagem = largura > altura ? true : false;
    return paisagem;
}

const resultado = ePaisagem(1080, 1920);
console.log(resultado);

console.log();
console.log('Exemplo 2');
console.log();


function paisagem(largura, altura) {
    if(largura > altura) return !!largura;
    return !altura;
}

console.log(paisagem(1080, 1920));

console.log();
console.log('Exemplo 3');
console.log();


const imageModeLandscape = (width, heigth) =>  width > heigth ? true : false;
   
console.log(imageModeLandscape(1920, 1080));

console.log();
console.log('Exemplo 4');
console.log();

const modeLandscaspe = (width, heigth) => width > heigth;
console.log(modeLandscaspe(1920, 1080));