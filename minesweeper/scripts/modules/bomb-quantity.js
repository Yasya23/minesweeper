let bombQuantity = 10;
let countBomb = bombQuantity;

function returnBobmQuantity() {
  return bombQuantity;
}

function returnCauntBombValue() {
  return countBomb;
}

function updateBobmQuantity(value) {
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

export {
  returnBobmQuantity,
  updateBobmQuantity,
  bombCounter,
  returnCauntBombValue,
};
