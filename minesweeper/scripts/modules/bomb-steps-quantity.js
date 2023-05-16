import { returnLevel } from './levels-actions.js';

const MIN_BOMBS = 10;
// const MAX_BOMBS = 99;

let steps = 0;
let bombQuantity = MIN_BOMBS;
let countBomb = bombQuantity;

function bombsOnTheField() {
  const level = returnLevel();
  console.log(level);
  let result;
  if (level === 10) {
    result = 10;
  } else if (level === 15) {
    result = 40;
  } else if (level === 25) {
    result = 99;
  }
  return result;
}

function updateBobmsOnTheFieldValue() {
  bombQuantity = bombsOnTheField();
  return bombQuantity;
}

function returnBobmQuantity() {
  return bombQuantity;
}

function returnCauntBombValue() {
  return countBomb;
}

function updateBobmQuantity(value) {
  bombQuantity = value;
}

function changeBombQuantity(value) {
  bombQuantity = value;
}

function bombCounter(value) {
  let number = 0;
  if (value === 'plus') {
    number = 1;
  } else if (value === 'minus') {
    number = -1;
  }
  countBomb += number;
  document.getElementById('bomb-counter').textContent = countBomb;
}

function blockChooseBombs() {
  document.getElementById('bombs-quantity').disabled = true;
}

function stepsCounter() {
  steps += 1;
  document.getElementById('steps').textContent = steps;
}

function resetStepsCounter() {
  steps = 0;
  document.getElementById('steps').textContent = steps;
}

export {
  returnBobmQuantity,
  updateBobmQuantity,
  bombCounter,
  returnCauntBombValue,
  stepsCounter,
  changeBombQuantity,
  blockChooseBombs,
  resetStepsCounter,
  updateBobmsOnTheFieldValue,
};
