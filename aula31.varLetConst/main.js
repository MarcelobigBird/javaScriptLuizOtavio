const verdadeira = true;

function falaOi() {
    
    if(verdadeira) {
        let nome = 'Luiz';      // respeita escopo de bloco não tem acesso fora do if
        var sobrenome = 'Miranda';
    }
    console.log(sobrenome);
}



falaOi();