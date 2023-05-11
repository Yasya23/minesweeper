import createCells from './modules/addCells.js';
import createPageStructure from './modules/pageStructure.js';
import {
  updateIsFirstClick,
  returnIsFirstClick,
} from './modules/isFirstClick.js';

function actionsWithCells(id) {
  if (!returnIsFirstClick()) {
    updateIsFirstClick(id);
    createCells();
  }
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('example-class')) actionsWithCells(e.target.id);
});

function init() {
  createPageStructure();
  createCells();
}

init();
