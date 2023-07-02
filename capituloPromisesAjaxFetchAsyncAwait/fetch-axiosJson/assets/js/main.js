const url = '../../pessoas.json';

// fetch(url)
//   .then((response) => response.json())
//   .then((responseJson) => renderizaDados(responseJson));  // eslint-disable-line

// usando axios

axios(url)
  .then(resposta => renderizaDados(resposta.data)); // eslint-disable-line

function renderizaDados(json) {
  const table = document.createElement('table');

  for (let pessoa of json) {
    const tr = document.createElement('tr');

    let td = document.createElement('td');
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.idade;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.salario;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table);
}
