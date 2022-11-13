const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counterValue = 0;
const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

refs.decrementBtn.addEventListener('click', decrement);
refs.incrementBtn.addEventListener('click', increment);

