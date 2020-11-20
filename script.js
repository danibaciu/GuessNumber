'use strict';
const defaultMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let score = 20;
let highscore = 0;
let secretNumber = Math.round(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    defaultMessage('❌No number!');
  } else if (guess === secretNumber) {
    defaultMessage('✅ Correct number!');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 0) {
      defaultMessage('⬆ Too high!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      defaultMessage('💥 You lost the game!');
      document.querySelector('body').style.backgroundColor = '	#DC143C';
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      defaultMessage('⬇ Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      defaultMessage('💥 You lost the game!');
      document.querySelector('body').style.backgroundColor = '	#DC143C';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.round(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  defaultMessage('Start guessing... ');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
