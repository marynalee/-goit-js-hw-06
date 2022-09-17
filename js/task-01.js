const itemsEl = document.querySelectorAll('.item');
console.log(itemsEl);
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach(item => {
    const title = item.querySelector('h2');
    const li = item.querySelectorAll('li');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${li.length}`);
})