import { returnFinishArray } from './add-cells.js';

function showNumberCell(id, textContent, value) {
  const element = document.getElementById(id);
  element.textContent = textContent;
  element.classList.add(value);
}

function showAllCells(array) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    const element = cell;
    element.classList.add(array[index]);
    if (array[index] === 'bomb') {
      element.textContent = '🐹';
    } else if (array[index].slice(0, -1) === 'number') {
      element.textContent = array[index].slice(-1);
    }
  });
}
function handleCellAction(id) {
  const array = returnFinishArray();
  const cellValue = array[id];
  if (cellValue === 'bomb') {
    console.log('Game over');
    showAllCells(array);
  }
  if (cellValue.slice(0, -1) === 'number') {
    const number = cellValue.slice(-1);
    showNumberCell(id, number, cellValue);
  }
  if (cellValue === 'simple') {
    console.log(cellValue);
  }
}

export default handleCellAction;
