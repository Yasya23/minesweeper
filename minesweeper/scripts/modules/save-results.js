import { returnFinishArray } from './add-cells.js';
import { returnLevel } from './levels-actions.js';
import { returnTime } from './timer.js';

const gameState = {
  cells: null,
  timer: returnTime(),
  finishArray: null,
};

function getCells(value) {
  console.log(value);
  const cells = Array.from(document.querySelectorAll(`.${value}`));
  return cells.map((cell) => {
    return {
      id: cell.id,
      classList: Array.from(cell.classList),
    };
  });
}

function saveGameState(value) {
  if (value === 'cell') {
    gameState.cells = getCells(value);
  }
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function saveArrayState(array) {
  gameState.finishArray = array;
  localStorage.setItem('gameState', JSON.stringify(gameState));
}

function getGameState() {
  const gameStateData = localStorage.getItem('gameState');
  if (gameStateData) {
    const data = JSON.parse(gameStateData);
    const { cells, finishArray } = data;
    console.log(cells, finishArray);
    if (cells) {
      console.log(1);
      const cellsHtml = document.querySelectorAll('.cell');
      cellsHtml.forEach((cell, index) => {
        const classes = cells[index].classList;
        if (classes) {
          classes.forEach((elClass) => {
            if (elClass.slice(0, -1) === 'number') cell.textContent = elClass.slice(-1);
            cell.classList.add(elClass);
          });
        }
      });
    }
  }
}

window.addEventListener('load', () => {
  setTimeout(getGameState, 1000);
});

export { saveGameState, saveArrayState };
