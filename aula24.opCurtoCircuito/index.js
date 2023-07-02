/**
 *  &&  -> true && false && true -> retorna o valor false
 *  ||  -> false  || false || true -> retorna o valor verdadeiro
 *  
 *  FALSY
 *  false 
 *  0
 *  '' `` ""
 *  null / undefined
 *  NaN
 *  */

console.log('Luiz' && NaN && 'Maria');
console.log();

let vaiExecutar = true;

function falaOi() {
    return 'Oi';
}


console.log(vaiExecutar && falaOi());
console.log();


const nome = 'Otávio';

console.log(0 || false || null || nome || true);


const corUsuario = 'verde';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
console.log();

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

