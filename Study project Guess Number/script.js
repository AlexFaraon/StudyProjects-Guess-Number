'use strict';

// console.log(document.querySelector('.message').textContent);

//DOM and DOM manipulation
/* Document Object Model:
Structured representation of HTML documents. Allow JS to access
HTML elements and Styles to manipulate them.

Tree structure, generated by browser on HTML load!!!
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// can also be called 'The STATE variable"
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is No input!
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!❌';
    displayMessage('No number!❌');
    //When player WINS!
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🥳🥳🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '☝️ Too HIGH!' : '👇Too LOW!';
      displayMessage(guess > secretNumber ? '☝️ Too HIGH!' : '👇Too LOW!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😵‍💫You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Restart the game button AGAIN
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  let secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
