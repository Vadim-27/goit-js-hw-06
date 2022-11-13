const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector(`#ingredients`);

const elementsList = ingredients.map(elem => {
  const liEl = document.createElement('li');
  liEl.textContent = elem;
  liEl.classList.add('item')
  return liEl;
})

list.append(...elementsList);