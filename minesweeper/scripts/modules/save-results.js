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

function saveSoundState(value) {
  const sound = {};
  sound.value = value;
  localStorage.setItem('soundState', JSON.stringify(sound));
}

function saveStepsState(value) {
  const steps = {};
  steps.value = value;
  localStorage.setItem('stepsState', JSON.stringify(steps));
}

function saveLevelState(value) {
  const level = {};
  level.value = value;
  localStorage.setItem('levelState', JSON.stringify(level));
}

function saveBobmQuantityState(value) {
  const bombs = {};
  bombs.value = value;
  localStorage.setItem('bombsState', JSON.stringify(bombs));
}

function saveTimerState(value) {
  const timer = {};
  timer.value = value;
  localStorage.setItem('timerState', JSON.stringify(timer));
}

function saveFlagState(value) {
  const flag = {};
  flag.value = value;
  localStorage.setItem('flagState', JSON.stringify(flag));
}

export {
  saveGameState, saveArrayState, saveThemeState, saveSoundState, saveStepsState, saveLevelState,
  saveBobmQuantityState, saveTimerState, saveFlagState,
};
