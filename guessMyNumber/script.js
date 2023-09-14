'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
let currentScore = Number(document.querySelector('.score').textContent);
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  if (!guess) {
    message.textContent = 'You`re pathetic fucking loser!';
  } else if (guess === secretNumber) {
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highscore').textContent = highScore;
    }

    message.textContent = 'Hey, you did nice!';
    document.body.style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < secretNumber) {
    if (currentScore <= 0) {
      message.textContent = "You're pathetic fucking loser!";
      document.body.style.backgroundColor = 'red';
    } else {
      message.textContent = 'Your guess is too low!';
      --currentScore;
    }
    document.querySelector('.score').textContent = currentScore;
  } else if (guess > secretNumber) {
    if (currentScore <= 0) {
      message.textContent = "You're pathetic fucking loser!";
      document.body.style.backgroundColor = 'red';
    } else {
      message.textContent = 'Your guess is too high!';
      --currentScore;
    }
    document.querySelector('.score').textContent = currentScore;
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  currentScore = 20;
  document.querySelector('.score').textContent = currentScore;
  document.querySelector('body').style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
