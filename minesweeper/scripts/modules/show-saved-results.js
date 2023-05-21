import { updateFinishArray } from './add-cells.js';
import { switchSoundValue } from './sounds.js';
import {
  updateSteps, bombCounter, returnBobmQuantity, updateBobmQuantity, calculateRangeOnThePage,
  blockChooseBombs,
} from './bomb-steps-quantity.js';
import data from './data.js';
import { changeLevel, blockedChooseLevel } from './levels-actions.js';
import { formatTime, updateTimer, startTimer } from './timer.js';
import { checkOpenedCells } from './cell-actions.js';

function getData() {
  const gameStateData = localStorage.getItem('gameState');
  const arrayStateData = localStorage.getItem('arrayState');
  const themeData = localStorage.getItem('theme');
  const soundData = localStorage.getItem('soundState');
  const stepsData = localStorage.getItem('stepsState');
  const levelData = localStorage.getItem('levelState');
  const bombsData = localStorage.getItem('bombsState');
  const timerData = localStorage.getItem('timerState');

  const gameState = gameStateData ? JSON.parse(gameStateData) : {};
  const arrayState = arrayStateData ? JSON.parse(arrayStateData) : {};
  const theme = themeData ? JSON.parse(themeData) : {};
  const sound = soundData ? JSON.parse(soundData) : {};
  const steps = stepsData ? JSON.parse(stepsData) : {};
  const level = levelData ? JSON.parse(levelData) : {};
  const bombs = bombsData ? JSON.parse(bombsData) : {};
  const timer = bombsData ? JSON.parse(timerData) : {};

  const dataValues = {
    gameState,
    arrayState,
    theme,
    sound,
    steps,
    level,
    bombs,
    timer,
  };

  return dataValues;
}

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

function getGameState() {
  const dataValues = getData();
  const {
    gameState, arrayState, theme, sound, steps, level, bombs, timer,
  } = dataValues;
  if (level.value) {
    const element = document.getElementById('level');
    element.value = level.value;
    changeLevel(level.value);
  }
  if (arrayState && arrayState.finishArray) updateFinishArray(arrayState.finishArray);
  if (theme && theme.darkTheme) document.body.classList.add('dark');
  if (bombs && bombs.value) {
    updateBobmQuantity(bombs.value);
    calculateRangeOnThePage(bombs.value);
    document.getElementById('bomb-counter').textContent = bombs.value;
    document.getElementById('rangevalue').textContent = bombs.value;
  }
  if (gameState && gameState.cells) addValueToHtml(gameState.cells);
  if (sound && !sound.value) {
    switchSoundValue();
    document.querySelector('.sound-icon').classList.add('fa-volume-xmark');
  }
  if (steps && steps.value) updateSteps(steps.value);
  if (timer && timer.value) {
    const [hour, minutes, seconds] = timer.value;
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
}

export default getGameState;
