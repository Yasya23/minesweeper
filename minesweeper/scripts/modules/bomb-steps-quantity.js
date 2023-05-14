const MIN_BOMBS = 10;
// const MAX_BOMBS = 99;

let bombQuantity = MIN_BOMBS;
let countBomb = bombQuantity;
let steps = 0;

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

function stepsCounter() {
  steps += 1;
  document.getElementById('steps').textContent = steps;
}

export {
  returnBobmQuantity,
  updateBobmQuantity,
  bombCounter,
  returnCauntBombValue,
  stepsCounter,
  changeBombQuantity,
};
