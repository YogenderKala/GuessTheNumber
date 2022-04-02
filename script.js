'use strict';
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1; //to get a random number between 1-20
let highScore = 0;
function showMessage(message) {
  document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //if user does not enter any value
  if (!guess) {
    showMessage('Enter a number');
  }
  //if the user guesses correct number
  else if (guess === secretNumber) {
    showMessage('correct answer');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347'; //manipulating css
    // setting up the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //if the user does not guesses corrrect answer
  else if (guess !== secretNumber) {
    if (score > 1) {
      showMessage(guess > secretNumber ? 'Too high' : 'Too low'); //condition using ternary operator
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// again button or restarting the game
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  showMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
