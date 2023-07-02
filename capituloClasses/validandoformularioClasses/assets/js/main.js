class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');  //eslint-disable-line

    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', (event) => {
      this.handleSubmit(event);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const fieldsValids = this.fieldsValid();
    const passwordValid = this.passwordIsValid();

    if (fieldsValids && passwordValid) {
      alert('Formulário enviado.');   // eslint-disable-line
      this.formulario.submit();
    }
  }

  passwordIsValid() {
    let valid = true;

    const password = this.formulario.querySelector('.senha');
    const repeatPassword = this.formulario.querySelector('.repetir-senha');

    if (password.value !== repeatPassword.value) {
      this.createError(password, 'Campo senha e repetir-senha precisam ser iguais.');
      this.createError(repeatPassword, 'Campo senha e repetir-senha precisam ser iguais.');
      valid = false;
    }

    if (password.value.length < 6 || password.value.length > 12) {
      this.createError(password, 'Campo senha precisa ter entre 6 e 12 caracteres.');
      valid = false;
    }

    return valid;
  }

  fieldsValid() {
    let valid = true;

    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    const fields = this.formulario.querySelectorAll('.validar');
    for (let field of fields) {
      const label = field.previousElementSibling.innerText;
      if (!field.value) {
        this.createError(field, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (field.classList.contains('cpf')) {
        if (!this.validaCpf(field)) valid = false;
      }

      if (field.classList.contains('usuario')) {
        if (this.validaUsuario(field) === false) valid = false;  // eslint-disable-line
      }
    }
    return valid;
  }

  validaUsuario(field) {
    const user = field.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, 'Usuário só podera conter letras e/ou números. ');
      valid = false;
    }
    return valid;
  }

  validaCpf(field) {
    const cpf = new ValidaCpf(field.value);  // eslint-disable-line

    if (!cpf.valida()) {
      this.createError(field, 'CPF Inválido.');
      return false;
    }
    return true;
  }

  createError(campo, msg) {
    const div = document.createElement('div'); // eslint-disable-line
    div.setAttribute('class', 'error-text');
    div.innerHTML = msg;
    campo.insertAdjacentElement('afterend', div);
  }
}

const formulario = new ValidaFormulario();
console.log(formulario);
