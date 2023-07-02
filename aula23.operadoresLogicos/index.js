/**
 *  Operadores Lógicos
 *  && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
 *  || -> OR -> OU -> Apenas uma das expressões precisam ser verdadeiras
 *  ! -> NOT -> NÃO -> Nega uma expressão
 *  
 */

const expressionAnd = true && true && true;
const expressionOr = true || false;

console.log(expressionAnd);
console.log(expressionOr);

console.log();

// Dados de um form

let user = '';
const password = '123456';

const logged = () => { 
    if (!user || !password) return 'user or password invalid';  
    if (user !== 'Luiz' || password !== '123456') return 'User not exist';
    return 'User logged in successfully';
}

console.log(logged());

