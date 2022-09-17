function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const currentColor = getRandomHexColor();

const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')
const colorSpanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonChangeColorClick);

function onButtonChangeColorClick() {
  bodyEl.style.backgroundColor = currentColor;
  colorSpanEl.textContent = currentColor;
}
