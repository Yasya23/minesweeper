import { createCells } from './modules/add-cells.js';
import createPageStructure from './modules/page-structure.js';
import {
  updateIsFirstClick,
  returnIsFirstClick,
} from './modules/first-click.js';
import handleCellAction from './modules/cell-actions.js';
import {
  returnIsFlag,
  updateIsFlag,
  addFlag,
  removeFlag,
  removeAllFlags,
} from './modules/flag-actions.js';

import {
  stepsCounter,
  changeBombQuantity,
  blockChooseBombs,
  resetStepsCounter,
  updateBobmsOnTheFieldValue,
  returnBobmQuantity,
  calculateRangeOnThePage,
  returnSteps,
  updateSteps,
} from './modules/bomb-steps-quantity.js';

import { changeLevel, blockedChooseLevel } from './modules/levels-actions.js';

import { startTimer, resetTimer } from './modules/timer.js';
import { actionsWithModalWindow } from './modules/modal-window.js';
import newGame from './modules/new-game.js';
import playSound from './modules/sounds.js';

function actionsWithCells(id) {
  if (!returnIsFirstClick()) {
    resetTimer();
    if (returnSteps() > 0) {
      updateSteps(1);
    }
    startTimer();
    updateIsFirstClick(true, id);
    createCells();
  }
  handleCellAction(id);
}

function handleCellClick(classList, idData) {
  if (!classList.contains('clicked')) stepsCounter();
  actionsWithCells(idData, classList);
  blockChooseBombs(true);
  blockedChooseLevel(true);
}

function addSound(classList) {
  if (classList.contains('cell') && !classList.contains('clicked')) {
    playSound('click');
  } else if (!classList.contains('clicked')) {
    playSound('generalClick');
  }
}

function handleClickActions(e) {
  const { id: idData } = e.target.dataset;
  const { id, classList, parentElement } = e.target;
  addSound(classList);
  if (idData === 'new-game') {
    newGame();
  } else if (parentElement.closest('.modal')) {
    actionsWithModalWindow(id);
  } else if (idData === 'flag') {
    updateIsFlag();
  } else if (classList.contains('cell') && !returnIsFlag() && !parentElement.closest('.flaged')) {
    handleCellClick(classList, idData);
  } else if (!returnIsFlag() && (classList.contains('flaged') || parentElement.closest('.flaged'))) {
    removeFlag(idData);
  } else if (returnIsFlag() && classList.contains('cell') && !classList.contains('clicked')) {
    addFlag(idData);
  }
}

function handleLevelChanged(value) {
  removeAllFlags();
  changeLevel(value);
  createCells();
  resetStepsCounter();
  updateBobmsOnTheFieldValue();
  document.getElementById('rangevalue').textContent = returnBobmQuantity();
}

function changeTheme() {
  document.body.classList.toggle('dark');
}

function handleCnahgeActions(e) {
  const { id, value } = e.target;
  if (id === 'level') handleLevelChanged(value);
  if (id === 'bombs-quantity') {
    removeAllFlags();
    changeBombQuantity(Number(value));
    calculateRangeOnThePage(Number(value));
  }
  if (id === 'theme-checkbox') changeTheme();
}

function handleInputActions(e) {
  e.preventDefault();
  const { id, value } = e.target;
  if (id === 'bombs-quantity') {
    playSound('rangeChange');
    calculateRangeOnThePage(value);
    document.getElementById('rangevalue').textContent = value;
  }
}

function init() {
  createPageStructure();
  calculateRangeOnThePage(20);
  createCells();
}

document.addEventListener('click', handleClickActions);
document.addEventListener('change', handleCnahgeActions);
document.addEventListener('input', handleInputActions);

init();
