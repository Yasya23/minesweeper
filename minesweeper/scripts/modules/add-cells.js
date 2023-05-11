import {
  returnIsFirstClick,
  returnElementId,
} from './first-click.js';

const levels = {
  easy: 10,
  medium: 15,
  hard: 25,
};

let finishArray = [];

const level = levels.easy;

const bombQuantity = 10;

function getNeighbors(index) {
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
  const filled = document.querySelector('.filled');
  const cells = array
    .map((_, index) => `<div class="cell" id=${index}></div>`)
    .join('');
  filled.innerHTML = cells;
}

function createCells() {
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

  addCellsToHtml(finishArray);
}

function returnFinishArray() {
  return finishArray;
}

export { createCells, returnFinishArray };
