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

import { stepsCounter, changeBombQuantity } from './modules/bomb-steps-quantity.js';
import { changeLevel } from './modules/levels-actions.js';

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
  if (e.target.id === 'new-game') createCells();
  if (e.target.id === 'flag') updateIsFlag();
  if (e.target.classList.contains('cell') && !returnIsFlag() && !e.target.classList.contains('flaged')) {
    if (!e.target.classList.contains('clicked')) stepsCounter();
    actionsWithCells(e.target.id);
  }
  if (!returnIsFlag() && e.target.classList.contains('flaged')) removeFlag(e.target.id);
  if (returnIsFlag() && e.target.classList.contains('cell')) addFlag(e.target.id);
});

document.addEventListener('change', (e) => {
  if (e.target.id === 'level') {
    changeLevel(e.target.value);
    createCells();
  }
  if (e.target.id === 'bombs-quantity') {
    changeBombQuantity(Number(e.target.value));
  }
});

document.addEventListener('input', (e) => {
  e.preventDefault();
  document.getElementById('rangevalue').textContent = e.target.value;
});

init();
