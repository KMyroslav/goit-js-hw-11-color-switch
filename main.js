const startBtn = document.querySelector('[data-action="start"]');
const stopBtn = document.querySelector('[data-action="stop"]');
let timerId = null;
let active = false;
let currentColor = 0;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (active) {
    return;
  }
  active = true;
  timerId = setInterval(changeColor, 1000);
}

function changeColor() {
  let randomColor = randomIntegerFromInterval(0, colors.length);
  while (currentColor === randomColor) {
    randomColor = randomIntegerFromInterval(0, colors.length);
  }
  currentColor = randomColor;
  document.body.style.backgroundColor = `${colors[currentColor]}`;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStopBtnClick() {
  active = false;
  clearInterval(timerId);
}
