// for in -> lê os índices do array ou chaves do objeto

const fruits = ['apple', 'orange', 'grape', 'pear', 'mango', 'papaya'];

for (let key in fruits) {
    console.log(key, fruits[key]);
}


const pessoa = {
     nome: 'Marcelo', 
     sobrenome: 'Pereira dos Santos', 
     idade: 41,
     endereço: {
        rua: 'Merino',
        numero: 37,
        bairro: 'Vl. Sabrina',
        cidade: 'São Paulo'
     } 
    };

    for (let key in pessoa) {
        console.log(pessoa[key]);
    }