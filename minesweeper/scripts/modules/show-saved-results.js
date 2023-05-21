import { updateFinishArray } from './add-cells.js';
import { switchSoundValue } from './sounds.js';
import {
  updateSteps, bombCounter, returnBobmQuantity, updateBobmQuantity,
} from './bomb-steps-quantity.js';
import data from './data.js';
import { changeLevel } from './levels-actions.js';

function addCellsValueToHtml(cells) {
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
}

function getData() {
  const gameStateData = localStorage.getItem('gameState');
  const arrayStateData = localStorage.getItem('arrayState');
  const themeData = localStorage.getItem('theme');
  const soundData = localStorage.getItem('soundState');
  const stepsData = localStorage.getItem('stepsState');
  const levelData = localStorage.getItem('levelState');

  const gameState = gameStateData ? JSON.parse(gameStateData) : {};
  const arrayState = arrayStateData ? JSON.parse(arrayStateData) : {};
  const theme = themeData ? JSON.parse(themeData) : {};
  const sound = soundData ? JSON.parse(soundData) : {};
  const steps = stepsData ? JSON.parse(stepsData) : {};
  const level = levelData ? JSON.parse(levelData) : {};

  const dataValues = {
    gameState,
    arrayState,
    theme,
    sound,
    steps,
    level,
  };

  return dataValues;
}

function getGameState() {
  const dataValues = getData();
  const {
    gameState, arrayState, theme, sound, steps, level,
  } = dataValues;
  if (level.value) {
    const element = document.getElementById('level');
    element.value = level.value;
    changeLevel(level.value);
  }
  if (arrayState.finishArray) updateFinishArray(arrayState.finishArray);
  if (theme.darkTheme) document.body.classList.add('dark');
  if (gameState.cells) addCellsValueToHtml(gameState.cells);
  if (!sound.value) {
    switchSoundValue();
    document.querySelector('.sound-icon').classList.add('fa-volume-xmark');
  }
  if (steps.value) updateSteps(steps.value);
}

export default getGameState;
