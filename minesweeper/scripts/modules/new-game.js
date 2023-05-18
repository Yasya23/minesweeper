import { createCells } from './add-cells.js';
import { resetTimer } from './timer.js';
import { blockChooseBombs, resetStepsCounter } from './bomb-steps-quantity.js';
import { blockedChooseLevel } from './levels-actions.js';
import { removeFlag } from './flag-actions.js';
import { updateIsFirstClick } from './first-click.js';

function newGame() {
  updateIsFirstClick(false, null);
  document.querySelectorAll('.flaged').forEach((el) => removeFlag(el.id));
  resetStepsCounter();
  resetTimer();
  blockChooseBombs(false);
  blockedChooseLevel(false);
  createCells();
}

export default newGame;
