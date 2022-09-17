const inputEl = document.querySelector('#validation-input');
const inputLength = inputEl.dataset.length;


inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const valueLength = event.currentTarget.value.length;
    const isValid = valueLength === Number(inputLength);

    if (isValid) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
    event.currentTarget.classList.remove('valid');
    event.currentTarget.classList.add('invalid');
    }
};