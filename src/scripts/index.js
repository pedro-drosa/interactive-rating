const inputElements = document.querySelectorAll('input[name="feedback"]');
const labelElements = document.querySelectorAll('.form-button');

function addActiveClassToButton(event, elements) {
  elements.forEach((label) => label.classList.remove('active'));
  event.currentTarget.classList.add('active');
}

function getFeedbackValue(event) {
  return event.target.value;
}

inputElements.forEach((element) =>
  element.addEventListener('click', getFeedbackValue)
);

labelElements.forEach((label) =>
  label.addEventListener('click', (event) =>
    addActiveClassToButton(event, labelElements)
  )
);
