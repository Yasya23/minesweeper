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
  if (value === 'plus' || value === 'minus') {
    const number = (value === 'plus') ? 1 : -1;
    countBomb += number;
    const counterHtml = document.getElementById('bomb-counter');
    counterHtml.textContent = countBomb;
  }
}

export {
  returnBobmQuantity,
  updateBobmQuantity,
  bombCounter,
  returnCauntBombValue,
};
