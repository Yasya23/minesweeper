import { returnLevel } from './levels-actions.js';
import { returnTime } from './timer.js';

// const results = [];

// function saveGameResults() {
//  const level = returnLevel();

// }

function saveGameState() {
  const gameState = {
    level: returnLevel(),
    cells: Array.from(document.querySelectorAll('.cell')),
    timer: returnTime(),
    // Other game state properties
  };
  localStorage.setItem('gameState', JSON.stringify(gameState));
}
