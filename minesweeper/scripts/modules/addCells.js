const level = {
  easy: 10,
  medium: 15,
  hard: 25,
};

const bombQuantity = 10;

function createCells() {
  const quantity = level.easy ** 2;
  const cellQuantity = quantity - bombQuantity;
  const finishArray = [
    ...new Array(bombQuantity).fill('bomb'),
    ...new Array(cellQuantity).fill('simple'),
  ].sort(() => Math.random() - 0.5);
  addCellsToHtml(finishArray);
}

function addCellsToHtml(array) {
  const filled = document.querySelector('.filled');
  const cells = array
    .map((element, index) => {
      return `<div class="cell ${element}" id=${index}></div>`;
    })
    .join('');
  filled.innerHTML = cells;
}

export default createCells;
