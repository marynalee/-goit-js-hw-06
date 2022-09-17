const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('#ingredients');

const makeIngredients = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement("li");

    itemEl.textContent = ingredient;
    itemEl.classList.add('item');

    return itemEl;
  });
}

const itemsEl = makeIngredients(ingredients);

listEl.append(...itemsEl);
console.log(listEl);


