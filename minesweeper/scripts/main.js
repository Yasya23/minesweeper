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
    actionsWithCells(e.target.id);
  }
  if (!returnIsFlag() && e.target.classList.contains('flaged')) removeFlag(e.target.id);
  if (returnIsFlag() && e.target.classList.contains('cell')) addFlag(e.target.id);
});

init();
