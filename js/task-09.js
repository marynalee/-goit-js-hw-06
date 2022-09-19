function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('.change-color')
const colorSpanEl = document.querySelector('.color');

buttonEl.addEventListener('click', onButtonChangeColorClick);

function onButtonChangeColorClick() {
  const currentColor = getRandomHexColor();
  bodyEl.style.backgroundColor = currentColor;
  colorSpanEl.textContent = currentColor;
}
