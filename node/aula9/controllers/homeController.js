exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST"> 
    Nome do cliente: <input type= "text" name="nome"><br/>
    Endereço do cliente: <input type= "text" name= "endereço">
    <button>Enviar formulário</button>
    </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send('Eu sou sua nova rota de contato.');
};