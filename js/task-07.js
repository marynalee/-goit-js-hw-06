const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector("#text");

textEl.style.fontSize = inputRangeEl.value + 'px';

inputRangeEl.addEventListener("input", oninputRangeSize);

function oninputRangeSize(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
