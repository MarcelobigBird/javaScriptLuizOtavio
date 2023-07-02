const fs = require('fs').promises;

module.exports = async (caminho) => {
    const dadosArquivo =  await fs.readFile(caminho, 'utf8');
    return dadosArquivo;
}
