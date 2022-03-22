const params = new URLSearchParams(window.location.search);
const evaluationGrade = params.get('evaluationGrade');

const cardThankyouResultElement = document.querySelector(
  '.card-thankyou-result'
);

cardThankyouResultElement.innerText = `You selected ${
  evaluationGrade || 1
} out of 5`;

setTimeout(
  () => (window.location.href = 'http://127.0.0.1:5500/index.html'),
  1000
);
