import { bombCounter, returnCauntBombValue } from './bomb-quantity.js';

let isFlag = false;

function updateIsFlag() {
  const flag = document.getElementById('flag');
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
    element.textContent = '🚩';
    bombCounter('minus');
  }
}

function removeFlag(id) {
  const element = document.getElementById(id);
  element.textContent = '';
  element.classList.remove('flaged');
  bombCounter('plus');
}

export {
  updateIsFlag,
  returnIsFlag,
  addFlag,
  removeFlag,
};
