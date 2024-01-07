function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById('boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputField = document.querySelector('input');

console.log(inputField);

// console.log(createButton);
// console.log(destroyButton);
// console.log(boxesContainer);

function createBoxes(amount) {}
function validateInput(value) {
  console.log(value);
  value = Number.parseInt(value);
  console.log(value);
  if (isNaN(value)) {
    return false;
  } else {
    return true;
  }
}

destroyButton.addEventListener('click', event => {
  boxesContainer.innerHTML = '';
});

createButton.addEventListener('click', event => {
  console.log(validateInput(inputField.value));
});
