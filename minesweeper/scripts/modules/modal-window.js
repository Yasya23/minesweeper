import { pauseTimer } from './timer.js';

const gameOver = 'Game over';
const win = 'Congratulations';
// const confirmNewGame = 'Are you sure?';

function addModalMessage(message) {
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
}

function showModalWindow(value) {
  pauseTimer();
  if (value === 'bomb') {
    // document.querySelector('.button-img').src = 'img/corgi2.png';
    addModalMessage(gameOver);
  }
  if (value === 'win') addModalMessage(win);
  // const modalWindow = document.getElementById('modal');
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
  if (id === 'close-modal' || id === 'modal-agree-btn') closeModalWindow();
}

export { actionsWithModalWindow, showModalWindow};
