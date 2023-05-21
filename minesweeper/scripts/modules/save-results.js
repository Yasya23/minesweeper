// import { returnLevel } from './levels-actions.js';
import { returnTime } from './timer.js';

const gameState = {
  cells: null,
  timer: returnTime(),
  finishArray: null,
};

function getCells(value) {
  const cells = Array.from(document.querySelectorAll(`.${value}`));
  const result = cells.map((cell) => ({ id: cell.id, classList: Array.from(cell.classList) }));
  return result;
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

export { saveGameState, saveArrayState };
