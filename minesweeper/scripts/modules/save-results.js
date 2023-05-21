// import { returnLevel } from './levels-actions.js';
import { returnTime } from './timer.js';

function getCells(value) {
  const cells = Array.from(document.querySelectorAll(`.${value}`));
  const result = cells.map((cell) => ({ id: cell.id, classList: Array.from(cell.classList) }));
  return result;
}

function saveGameState(value) {
  const cellStates = {};
  if (value === 'cell') {
    cellStates.cells = getCells(value);
  }
  localStorage.setItem('gameState', JSON.stringify(cellStates));
}

function saveArrayState(array) {
  const arrayState = {};
  arrayState.finishArray = array;
  localStorage.setItem('arrayState', JSON.stringify(arrayState));
}

function saveThemeState(value) {
  const theme = {};
  theme.darkTheme = value;
  localStorage.setItem('theme', JSON.stringify(theme));
}

export { saveGameState, saveArrayState, saveThemeState };
