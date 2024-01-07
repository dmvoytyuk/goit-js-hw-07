const inputField = document.getElementById('name-input');
const nameField = document.getElementById('name-output');
console.log(inputField);

inputField.addEventListener('input', event => {
  if (inputField.value.trim()) {
    nameField.textContent = inputField.value.trim();
  } else {
    nameField.textContent = 'Anonymous';
  }
});
