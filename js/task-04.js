const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementtEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

const counterValue = {
    value: 0,
};

btnDecrementEl.addEventListener('click', onButtonDecrementClick);

btnIncrementtEl.addEventListener('click', onButtonIncrementClick);

function onButtonDecrementClick() {
    counterValue.value -= 1;
    valueEl.textContent = counterValue.value;
}

function onButtonIncrementClick() {
    counterValue.value += 1;
    valueEl.textContent = counterValue.value;
}