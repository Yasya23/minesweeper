import { returnFinishArray } from './add-cells.js';

function showCell(id, textContent, value) {
  const element = document.getElementById(id);
  element.textContent = textContent;
  element.classList.add(value);
}

function handleCellAction(id) {
  const array = returnFinishArray();
  const cellValue = array[id];
  if (cellValue === 'bomb') {
    const textContent = '🐼';
    showCell(id, textContent, cellValue);
  }
  if (cellValue.slice(0, -1) === 'number') {
    const number = cellValue.slice(-1);
    showCell(id, number, cellValue);
  }
  if (cellValue === 'simple') {
    console.log(cellValue);
  }
}

export default handleCellAction;
