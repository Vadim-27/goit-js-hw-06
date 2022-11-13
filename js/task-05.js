const refs = {
    input: document.querySelector('#name-input'),
    lable: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInput);

function onInput(event) { 
    refs.lable.textContent = event.currentTarget.value ? event.currentTarget.value : 'Anonymous';
}