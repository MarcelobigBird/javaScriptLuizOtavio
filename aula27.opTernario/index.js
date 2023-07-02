//  (condição) ? Valor para verdadeiro : Valor para falso;

const pontuacaoUsuario = 1000;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário vip' : 'Usuário normal';


// fallback
const corUsuario = 'amarela';
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);


