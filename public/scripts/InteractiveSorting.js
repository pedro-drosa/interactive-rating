class InteractiveSorting {
  constructor(inputsEl, buttonsEl) {
    this.inputsEl = document.querySelectorAll(inputsEl);
    this.buttonsEl = document.querySelectorAll(buttonsEl);
  }

  addActiveStateOnButtons(event, elements) {
    elements.forEach((label) => label.classList.remove('active'));
    event.currentTarget.classList.add('active');
  }

  getFeedbackValue(event) {
    return event.target.value;
  }

  showTime(timeOut) {
    setTimeout(() => (window.location.href = '/'), timeOut);
  }

  init() {
    this.inputsEl.forEach((element) => {
      element.addEventListener('click', this.getFeedbackValue);
    });

    this.buttonsEl.forEach((label) => {
      label.addEventListener('click', (event) => {
        this.addActiveStateOnButtons(event, this.buttonsEl);
      });
    });
  }
}

export default InteractiveSorting;
