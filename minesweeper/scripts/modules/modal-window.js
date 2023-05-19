import newGame from './new-game.js';
import { pauseTimer, returnTime } from './timer.js';
import { returnSteps } from './bomb-steps-quantity.js';
import { updateIsFirstClick } from './first-click.js';
import data from './data.js';
import playSound from './sounds.js';

function showWinMessage() {
  const { modalWinMessage } = data.modal;
  document.getElementById('modal-message').innerHTML = modalWinMessage;
  document.querySelector('.modal-steps').textContent = returnSteps();
  document.querySelector('.modal-timer').textContent = returnTime();
}

function showLoseMessage() {
  const { modalLoseMessage } = data.modal;
  document.getElementById('modal-message').innerHTML = modalLoseMessage;
}

function showModalWindow(value) {
  pauseTimer();
  if (value === 'bomb') {
    showLoseMessage();
    playSound('lose');
  }
  if (value === 'win') {
    showWinMessage();
    playSound('win');
  }
  const modalWindow = document.querySelector('.modal-wrapper');
  modalWindow.style.display = 'block';
  document.body.classList.add('no-scroll');
}

function closeModalWindow() {
  const modalWindow = document.querySelector('.modal-wrapper');
  modalWindow.style.display = 'none';
  document.body.classList.remove('no-scroll');
}

function actionsWithModalWindow(id) {
  if (id === 'close-modal') {
    closeModalWindow();
    updateIsFirstClick(false, null);
    pauseTimer();
  }
  if (id === 'modal-agree-btn') {
    closeModalWindow();
    newGame();
  }
}

export { actionsWithModalWindow, showModalWindow };
