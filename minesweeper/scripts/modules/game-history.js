import { returnBobmQuantity, returnSteps } from './bomb-steps-quantity.js';
import { returnLevel } from './levels-actions.js';
import { getGameHistory } from './local-storage-data.js';
import { saveGameHistory } from './save-results.js';
import { returnTime } from './timer.js';

function getResults() {
  const gameResult = {
    level: returnLevel(),
    bombs: returnBobmQuantity(),
    time: returnTime(),
    steps: returnSteps(),
  };
  return gameResult;
}

function addGameResult() {
  const result = getResults();
  const gameResults = getGameHistory();
  gameResults.push(result);
  if (gameResults.length > 10) gameResults.shift();
  saveGameHistory(gameResults);
}

export default addGameResult;
