<<<<<<< HEAD
const passwordBtnEl = $('#password-btn');
=======
const passwordBtnEl = $('.password-btn');
>>>>>>> c7636dc67ef98ece8fc11f8c979d38ca6b8dcd7d
const passwordDisplayEl = $('#password-display');

// Returns a random character that includes alphanumeric and special character values
function getPasswordCharacter() {
  return String.fromCharCode(Math.floor(Math.random() * 77) + 34);
}

// Returns a string of concatenated characters of length num
function passwordGenerator(num) {
  let password = '';
  for (let i = 0; i < num; i++) {
    password += getPasswordCharacter();
  }
  return password;
}

<<<<<<< HEAD
passwordBtnEl.on('click', function () {
=======
passwordBtnEl.on('dblclick', function () {
>>>>>>> c7636dc67ef98ece8fc11f8c979d38ca6b8dcd7d
  const newPassword = passwordGenerator(15);
  passwordDisplayEl.text(newPassword);
});
