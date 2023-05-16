import { pauseTimer } from './timer.js';
// const closeModalBtn = document.getElementById('close-modal');
// const modalAgreeBtn = document.getElementById('modal-agree-btn');
const gameOver = 'Game over';
const win = 'Congratulations';
// const confirmNewGame = 'Are you sure?';

function addModalMessage(message) {
  const modalMessage = document.getElementById('modal-message');
  modalMessage.textContent = message;
}

function showModalWindow(value) {
  pauseTimer();
  if (value === 'bomb') addModalMessage(gameOver);
  if (value === 'win') addModalMessage(win);
  const modalWindow = document.getElementById('modal');
  modalWindow.style.display = 'block';
}

function closeModalWindow() {
  const modalWindow = document.getElementById('modal');
  modalWindow.style.display = 'none';
}

function actionsWithModalWindow(id) {
  console.log(id);
  if (id === 'close-modal' || id === 'modal-agree-btn') closeModalWindow();
}

function isWin(element) {
  console.log(element);
  const cells = Array.from(document.querySelectorAll('.cell'));
  const array = cells.filter((cell) => !cell.classList.contains('bomb') && !cell.classList.contains('clicked') && !cell === element);
  if (array.length === 0) showModalWindow('win');
}

export { actionsWithModalWindow, showModalWindow, isWin };
