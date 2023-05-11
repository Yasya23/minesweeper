import { createCells } from './modules/add-cells.js';
import createPageStructure from './modules/page-structure.js';
import {
  updateIsFirstClick,
  returnIsFirstClick,
} from './modules/first-click.js';
import handleCellAction from './modules/handle-cell-actions.js';

function actionsWithCells(id) {
  if (!returnIsFirstClick()) {
    updateIsFirstClick(id);
    createCells();
  }
  handleCellAction(id);
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('cell')) actionsWithCells(e.target.id);
});

function init() {
  createPageStructure();
  createCells();
}

init();
