import { bombCounter, returnCauntBombValue } from './bomb-steps-quantity.js';
import playSound from './sounds.js';

let isFlag = false;

function updateIsFlag() {
  const flag = document.querySelector('.flag');
  flag.classList.toggle('flag-active');
  isFlag = !isFlag;
}

function returnIsFlag() {
  return isFlag;
}

function addFlag(id) {
  const element = document.getElementById(id);
  const bombsNumber = returnCauntBombValue();
  if (bombsNumber > 0) {
    element.classList.add('flaged');
    element.innerHTML = `<i data-id=${id} class="fa-solid fa-flag flag-icon"></i>`;
    bombCounter('minus');
    playSound('flaged');
  }
}

function removeFlag(id) {
  const element = document.getElementById(id);
  element.innerHTML = '';
  element.classList.remove('flaged');
  bombCounter('plus');
  playSound('flaged');
}

function removeAllFlags() {
  document.querySelectorAll('.flaged').forEach((el) => removeFlag(el.id));
}

export {
  updateIsFlag,
  returnIsFlag,
  addFlag,
  removeFlag,
  removeAllFlags,
};
