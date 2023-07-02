function createCalculator() {
  return {
    display: document.querySelector('.display'), // eslint-disable-line

    start() {
      this.clickButton();
      this.pressioneEnter();
    },

    clickButton() {
      document.addEventListener('click', (e) => {  // eslint-disable-line
        const elem = e.target;

        if (elem.classList.contains('btn-num')) this.buttonParaDisplay(elem.innerText);

        if (elem.classList.contains('btn-clear')) this.clearButton();

        if (elem.classList.contains('btn-del')) this.deleteOne();

        if (elem.classList.contains('btn-eq')) this.performsAccount();
      });
    },

    pressioneEnter() {
      this.display.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) this.performsAccount();
      });
    },

    performsAccount() {
      let account = this.display.value;

      try {
        account = eval(account); // eslint-disable-line

        if (!account) {
          alert('Account invalid');  // eslint-disable-line
          return;
        }

        this.display.value = account;
      } catch (error) {
        alert('Account invalid');  // eslint-disable-line
      }
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clearButton() {
      this.display.value = '';
      this.display.focus();
    },

    buttonParaDisplay(num) {
      this.display.value += num;
      this.display.focus();
    },
  };
}

const calculator = createCalculator();
calculator.start();
