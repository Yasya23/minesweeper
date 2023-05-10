import createCells from './modules/addCells.js';
import createPageStructure from './modules/pageStructure.js';

function init() {
  createPageStructure();
  createCells();
}

init();
