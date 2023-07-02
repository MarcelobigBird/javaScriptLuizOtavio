console.log('Exemplo 1');
console.log();

try {
    // É executa quando não há erros
    console.log('Abri o arquivo');
    console.log(nome);
    console.log('Fechei o arquivo');
} catch (e) {
    // É executada quando há erros
    console.log('error unknown');
} finally {
    // Sempre é executado
    console.log('FINALLY: Eu sou sempre executado');
}

console.log();
console.log('Exemplo 2');
console.log();

function returnHours(data) {
    if(data && !(data instanceof Date)) throw new Error('Esperando instancia do construtor Date.');

    if(!data) data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12')
    console.log(returnHours(data));

} catch (error) {
    console.log(error);
}  finally {
    console.log('FINALLY: Tenha um bom dia.')
} 