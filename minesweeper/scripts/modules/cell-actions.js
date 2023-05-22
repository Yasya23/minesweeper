import { returnFinishArray, getNeighbors } from './add-cells.js';
import { returnBobmQuantity } from './bomb-steps-quantity.js';
import { showModalWindow } from './modal-window.js';
import data from './data.js';
import addGameResult from './game-history.js';

function checkOpenedCells() {
  const cells = Array.from(document.querySelectorAll('.cell'));
  const cellsWithoutBombs = cells.length - returnBobmQuantity();
  const array = cells.filter((cell) => !cell.classList.contains('bomb') && cell.classList.contains('clicked'));
  return (array.length === cellsWithoutBombs);
}

function showNumberCell(id, textContent, value) {
  const element = document.getElementById(id);
  element.textContent = textContent;
  element.classList.add(value, 'clicked');
  if (checkOpenedCells()) showModalWindow('win');
  addGameResult();
}

function showAllCells(array) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    const element = cell;
    if (array[index] === 'bomb') {
      element.classList.add(array[index]);
      element.innerHTML = data.bombIcon;
    }
  });
}

function isSimpleCellClicked(array, id) {
  const cell = id;
  const neighbors = getNeighbors(cell);
  neighbors.forEach((neighbor) => {
    const neighborValue = array[neighbor];
    const flagged = document.getElementById(neighbor).classList.contains('flaged');
    if (neighborValue === 'bomb') return;
    if (neighborValue.slice(0, -1) === 'number' && !flagged) {
      showNumberCell(neighbor, neighborValue.slice(-1), neighborValue);
      document.getElementById(neighbor).classList.add('clicked');
      return;
    }
    if (!document.getElementById(neighbor).classList.contains('clicked') && !flagged) {
      document.getElementById(neighbor).classList.add('clicked', 'simple-white');
      isSimpleCellClicked(array, neighbor);
    }
  });
  checkOpenedCells();
}

function handleCellAction(id) {
  const array = returnFinishArray();
  const cellValue = array[id];
  if (cellValue === 'bomb') {
    showAllCells(array);
    showModalWindow('bomb');
  } else if (cellValue.slice(0, -1) === 'number') {
    const number = cellValue.slice(-1);
    showNumberCell(id, number, cellValue);
  } else if (cellValue === 'simple') {
    isSimpleCellClicked(array, id);
  }
}

export { handleCellAction, checkOpenedCells };
