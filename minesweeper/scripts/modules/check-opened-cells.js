import { returnBobmQuantity } from './bomb-steps-quantity.js';

function checkOpenedCells() {
  const cells = Array.from(document.querySelectorAll('.cell'));
  const cellsWithoutBombs = cells.length - returnBobmQuantity();
  const array = cells.filter((cell) => !cell.classList.contains('bomb') && cell.classList.contains('clicked'));
  return (array.length === cellsWithoutBombs);
}

export default checkOpenedCells;
