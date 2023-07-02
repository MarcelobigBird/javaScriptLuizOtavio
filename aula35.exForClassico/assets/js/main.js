const elementos = [    
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('section.container');
const div = document.createElement('div');


// Exemplo 1

// for (let i = 0; i < elementos.length; i++) {
//     let tagElemento = elementos[i].tag;
//     let createTag = document.createElement(tagElemento);
//     createTag.innerHTML = elementos[i].texto;
//     div.appendChild(createTag);
// }

// container.appendChild(div);

// Exemplo 2

// for (let i = 0; i < elementos.length; i++) {
//     let { tag, texto } = elementos[i];
//     let createTag = document.createElement(tag);
//     createTag.innerText = texto;
//     div.appendChild(createTag);    
// }

// container.appendChild(div);


// Exemplo 3

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let createTag = document.createElement(tag);
    let createText = document.createTextNode(texto);

    createTag.appendChild(createText);
    div.appendChild(createTag); 
}

container.appendChild(div);




