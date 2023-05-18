import newGame from './new-game.js';
import { pauseTimer, returnTime } from './timer.js';
import { returnSteps } from './bomb-steps-quantity.js';
import { updateIsFirstClick } from './first-click.js';
import data from './data.js';

function addModalMessage(message) {
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
}

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
  }
  if (value === 'win') showWinMessage(win);
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
