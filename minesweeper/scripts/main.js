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
} from './modules/flag-actions.js';

import {
  stepsCounter,
  changeBombQuantity,
  blockChooseBombs,
  resetStepsCounter,
  updateBobmsOnTheFieldValue,
  returnBobmQuantity,
  calculateRangeOnThePage,
} from './modules/bomb-steps-quantity.js';

import { changeLevel, blockedChooseLevel } from './modules/levels-actions.js';

import { startTimer, resetTimer } from './modules/timer.js';
import { actionsWithModalWindow } from './modules/modal-window.js';

function actionsWithCells(id) {
  if (!returnIsFirstClick()) {
    updateIsFirstClick(id);
    createCells();
  }
  handleCellAction(id);
}

function handleClickActions(e) {
  const { id: idData } = e.target.dataset;
  const { id, classList, parentElement } = e.target;
  if (idData === 'new-game') {
    createCells();
    resetStepsCounter();
    resetTimer();
    blockChooseBombs(false);
    blockedChooseLevel(false);
  }
  if (parentElement.closest('.modal')) actionsWithModalWindow(id);
  if (idData === 'flag') updateIsFlag();
  if (classList.contains('cell') && !returnIsFlag() && (!parentElement.closest('flaged'))) {
    if (!classList.contains('clicked')) stepsCounter();
    startTimer();
    actionsWithCells(idData);
    blockChooseBombs(true);
    blockedChooseLevel(true);
  }
  if (!returnIsFlag() && (classList.contains('flaged') && parentElement.closest('.flaged'))) {
    removeFlag(idData);
  }

  if (returnIsFlag() && classList.contains('cell')) addFlag(idData);
}

function handleCnahgeActions(e) {
  const { id, value } = e.target;
  if (id === 'level') {
    changeLevel(value);
    createCells();
    resetStepsCounter();
    updateBobmsOnTheFieldValue();
    document.getElementById('rangevalue').textContent = returnBobmQuantity();
  }
  if (id === 'bombs-quantity') {
    changeBombQuantity(Number(value));
    calculateRangeOnThePage(Number(value));
  }
}

function handleInputActions(e) {
  e.preventDefault();
  const { id, value } = e.target;
  if (id === 'bombs-quantity') {
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
