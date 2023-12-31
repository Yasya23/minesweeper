import { createCells } from './modules/add-cells.js';
import createPageStructure from './modules/page-structure.js';
import { updateIsFirstClick, returnIsFirstClick } from './modules/first-click.js';
import handleCellAction from './modules/cell-actions.js';
import checkOpenedCells from './modules/check-opened-cells.js';
import {
  returnIsFlag, updateIsFlag, addFlag, removeFlag, removeAllFlags,
} from './modules/flag-actions.js';

import {
  stepsCounter, changeBombQuantity, blockChooseBombs, resetStepsCounter, updateBobmsOnTheFieldValue,
  returnBobmQuantity, calculateRangeOnThePage, returnSteps, updateSteps,
} from './modules/bomb-steps-quantity.js';

import { changeLevel, blockedChooseLevel } from './modules/levels-actions.js';

import { startTimer, resetTimer } from './modules/timer.js';
import { actionsWithModalWindow, showModalWindow } from './modules/modal-window.js';
import newGame from './modules/new-game.js';
import { playSound, switchSoundValue } from './modules/sounds.js';
import {
  saveGameState, saveThemeState, saveSoundState, saveFlagState,
} from './modules/save-results.js';
import { getGameHistoryState, getGameState } from './modules/show-saved-results.js';

function actionsWithCells(id) {
  const bomb = Array.from(document.querySelectorAll('.bomb'));
  const clicked = Array.from(document.querySelectorAll('.clicked'));
  if (bomb.length > 0) removeAllFlags();
  if ((!returnIsFirstClick() && clicked.length === 0) || (clicked.length > 0
    && (bomb.length > 0 || checkOpenedCells()))) {
    resetTimer();
    if (returnSteps() > 0) {
      updateSteps(1);
    }
    startTimer();
    updateIsFirstClick(true, id);
    createCells();
  }
  handleCellAction(id);
}

function handleCellClick(classList, idData) {
  if (!classList.contains('clicked')) stepsCounter();
  actionsWithCells(idData, classList);
  blockChooseBombs(true);
  blockedChooseLevel(true);
}

function addSound(classList) {
  if (!returnIsFlag() && classList.contains('cell') && !classList.contains('clicked')) {
    playSound('click');
  } else if (!classList.contains('clicked')) {
    playSound('generalClick');
  }
}

function switchSound() {
  const icon = document.querySelector('.sound-icon');
  icon.classList.toggle('fa-volume-xmark');
  if (icon.classList.contains('fa-volume-xmark')) {
    saveSoundState(false);
  } else {
    saveSoundState(true);
  }
  switchSoundValue();
}

function handleClickActions(e) {
  const { id: idData } = e.target.dataset;
  const { id, classList, parentElement } = e.target;
  addSound(classList);
  if (idData === 'new-game') {
    newGame();
    saveGameState('cell');
  } else if (id === 'history-button') {
    showModalWindow(id);
    getGameHistoryState();
  } else if (id === 'game-rule-button') {
    showModalWindow(id);
  } else if (parentElement.closest('.modal')) {
    actionsWithModalWindow(id);
  } else if (classList.contains('modal-wrapper')) {
    actionsWithModalWindow('wrapper');
  } else if (idData === 'flag') {
    updateIsFlag();
    saveFlagState(returnIsFlag());
  } else if (classList.contains('cell') && !returnIsFlag() && !classList.contains('flaged')) {
    handleCellClick(classList, idData);
    saveGameState('cell');
  } else if (!returnIsFlag() && classList.contains('flaged')) {
    removeFlag(idData);
    saveGameState('cell');
  } else if (returnIsFlag() && classList.contains('cell') && !classList.contains('clicked')
  && !classList.contains('flaged')) {
    addFlag(idData);
    saveGameState('cell');
  } else if (idData === 'sound') switchSound();
}

function handleLevelChanged(value) {
  removeAllFlags();
  changeLevel(value);
  createCells();
  resetStepsCounter();
  updateBobmsOnTheFieldValue();
  saveGameState('cell');
  document.getElementById('rangevalue').textContent = returnBobmQuantity();
}

function changeTheme() {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    saveThemeState(true);
  } else {
    saveThemeState(false);
  }
}

function handleCnahgeActions(e) {
  const { id, value } = e.target;
  if (id === 'level') handleLevelChanged(value);
  if (id === 'bombs-quantity') {
    removeAllFlags();
    changeBombQuantity(Number(value));
    calculateRangeOnThePage(Number(value));
  }
  if (id === 'theme-checkbox') changeTheme();
}

function handleInputActions(e) {
  e.preventDefault();
  const { id, value } = e.target;
  if (id === 'bombs-quantity') {
    playSound('rangeChange');
    calculateRangeOnThePage(value);
    document.getElementById('rangevalue').textContent = value;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const arrayStateData = localStorage.getItem('arrayState');
  const arrayState = arrayStateData ? JSON.parse(arrayStateData) : {};
  createPageStructure();
  calculateRangeOnThePage(10);
  if (!arrayState.finishArray) createCells();
});

window.addEventListener('load', getGameState);

document.addEventListener('click', handleClickActions);
document.addEventListener('change', handleCnahgeActions);
document.addEventListener('input', handleInputActions);
