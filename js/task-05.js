const inputEl = document.querySelector('#name-input');

const outputSpanEl = document.querySelector('#name-output');
const outputDefaultContent = outputSpanEl.textContent;

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {

    outputSpanEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
        outputSpanEl.textContent = outputDefaultContent
    };
    
}