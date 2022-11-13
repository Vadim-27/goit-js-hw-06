const refs = {
    inputEl: document.querySelector("#font-size-control"),
    spanEl: document.querySelector("#text"),
}

const chengeFrontSize = (e) => {
    refs.inputEl = Number(e.target.value);
    refs.spanEl.style.fontSize = `${refs.inputEl}px`;
    
}
refs.inputEl.addEventListener('input', chengeFrontSize);