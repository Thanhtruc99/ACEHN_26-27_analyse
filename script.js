// randum number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// check the user's guess
function checkGuess() {
  const userGuess = parseInt(document.getElementById('guessInput').value);
  const message = document.getElementById('message');
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Veuillez entrer un nombre valide entre 1 et 100.';
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = `Bravo! Vous avez deviné le nombre ${randomNumber} en ${attempts} tentatives.`;
    message.style.color = 'green';
  } else if (userGuess < randomNumber) {
    message.textContent = 'Trop bas! Essayez encore.';
    message.style.color = 'orange';
  } else {
    message.textContent = 'Trop haut! Essayez encore.';
    message.style.color = 'orange';
  }
}

// function to start a new game
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('guessInput').value = '';
  const message = document.getElementById('message');
  message.textContent = 'Nouvelle partie! Devine un nombre entre 1 et 100';
  message.style.color = '#fff';
}
