const form = document.querySelector('.login-form');
const userData = {};

form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    !event.target.elements.email.value ||
    !event.target.elements.password.value
  ) {
    alert('All form fields must be filled in');
  } else {
    userData[event.target.elements.email.getAttribute('name')] =
      event.target.elements.email.value.trim();
    userData[event.target.elements.password.getAttribute('name')] =
      event.target.elements.password.value.trim();
  }
  console.log(userData);
  event.target.reset();
});
