const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';


if(verdadeira) {
    let nome = 'Otávio';    // nesse caso você está criando outra variável
    var nome2 = 'Rogério';  // nesse caso você está redeclarando 

    if(verdadeira) {
        let nome = 'Outra coisa';   // criando outra variável
        var nome2 = 'Ronaldo';      // redeclarando
    }
}

console.log(nome, nome2);