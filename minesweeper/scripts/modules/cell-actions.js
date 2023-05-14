import { returnFinishArray, getNeighbors } from './add-cells.js';

function showNumberCell(id, textContent, value) {
  const element = document.getElementById(id);
  element.textContent = textContent;
  element.classList.add(value, 'clicked');
}

function showAllCells(array) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    const element = cell;
    if (array[index] === 'bomb') {
      element.classList.add(array[index]);
      element.textContent = '💣';
    }
  });
}

function isSimpleCellClicked(array, id) {
  const cell = id;
  const neighbors = getNeighbors(cell);
  neighbors.forEach((neighbor) => {
    const neighborValue = array[neighbor];
    if (neighborValue === 'bomb') return;
    if (neighborValue === 'flaged') return;
    if (neighborValue.slice(0, -1) === 'number') {
      showNumberCell(neighbor, neighborValue.slice(-1), neighborValue);
      document.getElementById(neighbor).classList.add('clicked');
      return;
    }
    if (!document.getElementById(neighbor).classList.contains('clicked')) {
      document.getElementById(neighbor).classList.add('clicked', 'simple-white');
      isSimpleCellClicked(array, neighbor);
    }
  });
}

function handleCellAction(id) {
  const array = returnFinishArray();
  console.log(array);
  const cellValue = array[id];
  if (cellValue === 'bomb') {
    showAllCells(array);
  } else if (cellValue.slice(0, -1) === 'number') {
    const number = cellValue.slice(-1);
    showNumberCell(id, number, cellValue);
  } else if (cellValue === 'simple') {
    isSimpleCellClicked(array, id);
  }
}

export default handleCellAction;
