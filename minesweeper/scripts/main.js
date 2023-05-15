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
} from './modules/bomb-steps-quantity.js';

import { changeLevel } from './modules/levels-actions.js';

import { startTimer, resetTimer } from './modules/timer.js';

function actionsWithCells(id) {
  if (!returnIsFirstClick()) {
    updateIsFirstClick(id);
    createCells();
  }
  handleCellAction(id);
}

function init() {
  createPageStructure();
  createCells();
}

document.addEventListener('click', (e) => {
  const { id } = e.target.dataset;
  const { classList, parentElement } = e.target;
  if (id === 'new-game') {
    createCells();
    resetStepsCounter();
    resetTimer();
  }
  if (id === 'flag') updateIsFlag();
  if (classList.contains('cell') && !returnIsFlag() && (!classList.contains('flaged') && !parentElement.closest('flaged'))) {
    if (!classList.contains('clicked')) stepsCounter();
    actionsWithCells(id);
    blockChooseBombs();
    startTimer();
  }

  if (!returnIsFlag() && (classList.contains('flaged') || parentElement.closest('flaged'))) {
    removeFlag(id);
  }

  if (returnIsFlag() && classList.contains('cell')) addFlag(id);
});

document.addEventListener('change', (e) => {
  const { id, value } = e.target;
  if (id === 'level') {
    changeLevel(value);
    createCells();
    resetStepsCounter();
  }
  if (id === 'bombs-quantity') changeBombQuantity(Number(value));
});

document.addEventListener('input', (e) => {
  e.preventDefault();
  const { id, value } = e.target;
  if (id === 'bombs-quantity') document.getElementById('rangevalue').textContent = value;
});

init();
