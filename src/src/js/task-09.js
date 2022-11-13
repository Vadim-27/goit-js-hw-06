
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  btn: document.querySelector('.change-color'),
  body: document.querySelector('body'),
  spanEl: document.querySelector('.color'),
}
const onChengBackground = (e) => {
  refs.body.style.background = getRandomHexColor();
  refs.spanEl.textContent = getRandomHexColor();
}
refs.btn.addEventListener('click', onChengBackground);
