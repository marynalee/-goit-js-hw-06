const inputEl = document.querySelector('#name-input');

const outputSpanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    outputSpanEl.textContent = event.currentTarget.value;
}