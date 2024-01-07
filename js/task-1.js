const categories = document.querySelectorAll('.item');
console.log(`number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2');
  const categoryElements = category.querySelectorAll('li');

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryElements.length}`);
});
