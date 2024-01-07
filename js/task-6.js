function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById('boxes');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const inputField = document.querySelector('input');

function createBoxes(amount) {
  let boxes = [];
  let box = '';
  let boxWidth = 30;
  let boxHeight = 30;
  for (let i = 0; i < amount; i++) {
    let randomColor = getRandomHexColor();
    box = `<div style="background-color:${randomColor};width:${boxWidth}px;height:${boxHeight}px;"></div>`;
    boxes.push(box);
    boxWidth += 10;
    boxHeight += 10;
  }
  return boxes.join('');
}

function validateInput(value) {
  value = Number.parseInt(value);
  if (isNaN(value)) {
    return false;
  } else if (value < 1 || value > 100) {
    return false;
  } else {
    return true;
  }
}

destroyButton.addEventListener('click', event => {
  boxesContainer.innerHTML = '';
});

createButton.addEventListener('click', event => {
  if (validateInput(inputField.value)) {
    boxesContainer.innerHTML = '';
    const newHTML = createBoxes(Number.parseInt(inputField.value));
    boxesContainer.innerHTML = newHTML;
  } else {
    alert('Enter number between 1 to 100');
  }
});
