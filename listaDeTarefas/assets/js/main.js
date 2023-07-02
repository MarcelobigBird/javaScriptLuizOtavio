const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

const criaLi = () => document.createElement('li');

inputTarefa.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

const clearInput = () => {
  inputTarefa.value = '';
  inputTarefa.focus();
};

const criarBotaoApagar = (li) => {
  const button = document.createElement('button');
  button.setAttribute('class', 'apagar');
  button.setAttribute('title', 'apagar esta tarefa');
  li.innerHTML += ' ';
  button.innerHTML = 'apagar';
  li.appendChild(button);
  return li;
};

const criaTarefa = (textoInput) => {
  const li = criaLi();
  const textoValue = document.createTextNode(textoInput);
  li.appendChild(textoValue);
  tarefas.appendChild(li);
  clearInput();
  criarBotaoApagar(li);
  salvarTarefas();
};

btnTarefa.addEventListener('click', () => {
  if (!inputTarefa.value) return;

  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

const salvarTarefas = () => {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaTarefas = [];

  for (let liTarefa of liTarefas) {
    let tarefa = liTarefa.innerText;
    tarefa = tarefa.replace('apagar', '').trim();
    listaTarefas.push(tarefa);
  }
  const tarefasJson = JSON.stringify(listaTarefas);
  localStorage.setItem('tarefas', tarefasJson);
};

const addTarefasSalvas = () => {
  const tarefasJson = localStorage.getItem('tarefas');
  const listaTarefasConvertidas = JSON.parse(tarefasJson);

  for (let tarefa of listaTarefasConvertidas) {
    criaTarefa(tarefa);
  }
};

addTarefasSalvas();
