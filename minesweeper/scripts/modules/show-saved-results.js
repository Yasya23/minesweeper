import { updateFinishArray } from './add-cells.js';
import { switchSoundValue } from './sounds.js';
import {
  updateSteps, bombCounter, returnBobmQuantity, updateBobmQuantity, calculateRangeOnThePage,
  blockChooseBombs,
} from './bomb-steps-quantity.js';
import data from './data.js';
import { changeLevel, blockedChooseLevel } from './levels-actions.js';
import { updateTimer, startTimer } from './timer.js';
import { checkOpenedCells } from './cell-actions.js';
import { getData, getGameHistory } from './local-storage-data.js';
import { updateIsFlag } from './flag-actions.js';

function addValueToHtml(cells) {
  const cellsHtml = document.querySelectorAll('.cell');
  updateBobmQuantity(returnBobmQuantity());
  cellsHtml.forEach((cell, index) => {
    const element = cell;
    const classes = cells[index].classList;
    if (classes) {
      classes.forEach((elClass) => {
        if (elClass.slice(0, -1) === 'number') element.textContent = elClass.slice(-1);
        if (elClass === 'bomb') element.innerHTML = data.bombIcon;
        if (elClass === 'flaged') bombCounter('minus');
        element.classList.add(elClass);
      });
    }
  });
  if (document.querySelector('.clicked')) {
    blockChooseBombs(true);
    blockedChooseLevel(true);
  }
}

function addLevel(value) {
  const element = document.getElementById('level');
  element.value = value;
  changeLevel(value);
}

function addDarkTheme() {
  document.body.classList.add('dark');
}

function addBombQuantity(value) {
  updateBobmQuantity(value);
  calculateRangeOnThePage(value);
  document.getElementById('bomb-counter').textContent = value;
  document.getElementById('rangevalue').textContent = value;
}

function turnOffSound() {
  switchSoundValue();
  document.querySelector('.sound-icon').classList.add('fa-volume-xmark');
}

function updateTimerValues(timerValues) {
  const [hour, minutes, seconds] = timerValues;
  if (document.querySelector('.clicked')) {
    updateTimer(+hour, +minutes, +seconds);
    blockChooseBombs(true);
    blockedChooseLevel(true);
  } else {
    updateTimer(0, 0, 0);
  }
  if (!document.querySelector('.bomb') && !checkOpenedCells() && document.querySelector('.clicked')) {
    startTimer();
  }
}

function getGameState() {
  const dataValues = getData();
  const {
    gameState, arrayState, theme, sound, steps, level, bombs, timer, flag,
  } = dataValues;
  if (level && level.value) addLevel(level.value);
  if (arrayState && arrayState.finishArray) updateFinishArray(arrayState.finishArray);
  if (theme && theme.darkTheme) addDarkTheme();
  if (bombs && bombs.value) addBombQuantity(bombs.value);
  if (gameState && gameState.cells) addValueToHtml(gameState.cells);
  if (sound && !sound.value) turnOffSound();
  if (steps && steps.value) updateSteps(steps.value);
  if (timer && timer.value) updateTimerValues(timer.value);
  if (flag && flag.value) updateIsFlag();
}

function getGameHistoryState() {
  const dataValues = getGameHistory();
  const tableBody = document.querySelector('.table-body');
  const result = dataValues.map((el) => {
    const {
      level, bombs, time, steps,
    } = el;
    return `<tr>
    <td class="table-value">${level} * ${level}</td>
    <td class="table-value">${bombs}</td>
    <td class="table-value">${time}</td>
    <td class="table-value">${steps}</td>
  </tr>`;
  }).join('');
  tableBody.innerHTML = result;
}

export { getGameState, getGameHistoryState };
