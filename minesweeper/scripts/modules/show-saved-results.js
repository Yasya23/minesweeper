import { updateFinishArray } from './add-cells.js';

function addCellsValueToHtml(cells) {
  const cellsHtml = document.querySelectorAll('.cell');
  cellsHtml.forEach((cell, index) => {
    const element = cell;
    const classes = cells[index].classList;
    if (classes) {
      classes.forEach((elClass) => {
        if (elClass.slice(0, -1) === 'number') element.textContent = elClass.slice(-1);
        element.classList.add(elClass);
      });
    }
  });
}

function getData() {
  const gameStateData = localStorage.getItem('gameState');
  const arrayStateData = localStorage.getItem('arrayState');
  const themeData = localStorage.getItem('theme');

  const gameState = gameStateData ? JSON.parse(gameStateData) : {};
  const arrayState = arrayStateData ? JSON.parse(arrayStateData) : {};
  const theme = themeData ? JSON.parse(themeData) : {};

  const data = {
    gameState,
    arrayState,
    theme,
  };

  return data;
}

function getGameState() {
  const data = getData();
  const { gameState, arrayState, theme } = data;
  if (arrayState.finishArray) updateFinishArray(arrayState.finishArray);
  if (theme.darkTheme) document.body.classList.add('dark');
  if (gameState.cells) addCellsValueToHtml(gameState.cells);
}

export default getGameState;
