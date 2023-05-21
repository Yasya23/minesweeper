import { updateFinishArray } from './add-cells.js';

function getGameState() {
  const gameStateData = localStorage.getItem('gameState');
  if (gameStateData) {
    const data = JSON.parse(gameStateData);
    const { cells, finishArray } = data;
    // console.log(cells, finishArray);
    if (finishArray) {
      updateFinishArray(finishArray);
    }
    if (cells) {
      console.log(1);
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
  }
}

window.addEventListener('load', () => {
  setTimeout(getGameState, 1000);
});

export default getGameState;
