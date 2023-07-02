(function () {
  function CreateCalculator() {
    this.display = document.querySelector('.display');   // eslint-disable-line
    this.pressEnter();
  }

  CreateCalculator.prototype.start = function () {
    this.clickButtons();
  };

  CreateCalculator.prototype.clickButtons = function () {
    document.addEventListener('click', (e) => {  // eslint-disable-line
      const elem = e.target;
      if (elem.classList.contains('btn-num')) this.addNumDisplay(elem.innerText);

      if (elem.classList.contains('btn-clear')) this.clearButton();

      if (elem.classList.contains('btn-del')) this.deleteOne();

      if (elem.classList.contains('btn-eq')) this.performsAccount();
    });
  };

  CreateCalculator.prototype.pressEnter = function () {
    this.display.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.performsAccount();
    });
  };

  CreateCalculator.prototype.performsAccount = function () {
    let account = this.display.value;

    try {
      account = eval(account);  // eslint-disable-line

      if (!account) {
        alert('Account invalid');  // eslint-disable-line
        return;
      }

      this.display.value = account;
    } catch (error) {
      alert('Account invalid');  // eslint-disable-line
    }
  };

  CreateCalculator.prototype.deleteOne = function () {
    this.display.value = this.display.value.slice(0, -1);
  };

  CreateCalculator.prototype.clearButton = function () {
    this.display.value = '';
    this.display.focus();
  };

  CreateCalculator.prototype.addNumDisplay = function (num) {
    this.display.value += num;
    this.display.focus();
  };

  const calculator = new CreateCalculator();
  calculator.start();
}());
