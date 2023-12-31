import { returnIsFirstClick, returnElementId } from './first-click.js';
import { returnLevel } from './levels-actions.js';
import { returnBobmQuantity } from './bomb-steps-quantity.js';
import { saveArrayState } from './save-results.js';

let finishArray = [];

function getNeighbors(index) {
  const level = returnLevel();
  const row = Math.floor(index / level);
  const column = index % level;
  const indices = [-1, 0, 1];
  const neighbors = [];

  indices.forEach((i) => {
    indices.forEach((j) => {
      const newRow = row + i;
      const newColumn = column + j;
      if (
        newRow >= 0
        && newRow < level
        && newColumn >= 0
        && newColumn < level
        && !(i === 0 && j === 0)
      ) {
        neighbors.push(newRow * level + newColumn);
      }
    });
  });

  return neighbors;
}

function addCellsToHtml(array) {
  let flagged = [];
  if (returnIsFirstClick) flagged = Array.from(document.querySelectorAll('.flaged')).map((el) => el.id);
  const level = returnLevel();
  const filled = document.querySelector('.filled');
  let cellsHtml = '';
  array.forEach((_, index) => {
    const cellHtml = `<div class="cell" id=${index} data-id=${index}></div>`;
    const isFirstCellInRow = index % level === 0;
    const isLastCellInRow = (index + 1) % level === 0;
    if (isFirstCellInRow) {
      cellsHtml += '<div class="row">';
    }
    cellsHtml += cellHtml;
    if (isLastCellInRow) {
      cellsHtml += '</div>';
    }
  });
  filled.innerHTML = cellsHtml;
  if (flagged.length > 0) {
    flagged.forEach((el) => {
      const element = document.getElementById(el);
      element.classList.add('flaged');
    });
  }
}

function createCells() {
  const bombQuantity = returnBobmQuantity();
  const level = returnLevel();
  const quantity = level ** 2;
  const cellQuantity = quantity - bombQuantity;
  if (returnIsFirstClick()) {
    const clickedCell = returnElementId();
    finishArray = [
      ...new Array(bombQuantity).fill('bomb'),
      ...new Array(cellQuantity).fill('simple'),
    ].sort(() => Math.random() - 0.5);
    if (finishArray[clickedCell] === 'bomb') {
      const nonBombIndex = finishArray.findIndex((element) => element !== 'bomb');
      [finishArray[clickedCell], finishArray[nonBombIndex]] = [
        finishArray[nonBombIndex],
        finishArray[clickedCell],
      ];
    }
    finishArray.forEach((element, index) => {
      if (element === 'bomb') return;

      let count = 0;

      const neighbors = getNeighbors(index);
      neighbors.forEach((neighbor) => {
        if (finishArray[neighbor] === 'bomb') count += 1;
      });
      if (count > 0) finishArray[index] = `number${count}`;
    });
  } else {
    finishArray = new Array(level * level).fill('');
  }
  saveArrayState(finishArray);
  addCellsToHtml(finishArray);
}

function returnFinishArray() {
  return finishArray;
}

function updateFinishArray(array) {
  finishArray = array;
  addCellsToHtml(finishArray);
}

export {
  createCells, returnFinishArray, getNeighbors, updateFinishArray,
};
