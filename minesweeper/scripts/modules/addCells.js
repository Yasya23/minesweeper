const levels = {
  easy: 10,
  medium: 15,
  hard: 25,
};

const level = levels.easy;

const bombQuantity = 10;

function getNeighbors(index) {
  const row = Math.floor(index / level);
  const column = index % level;
  const indices = [-1, 0, 1];
  const neighbors = [];

  indices.forEach((i) => {
    indices.forEach((j) => {
      const newRow = row + i;
      const newColumn = column + j;
      if (
        newRow >= 0 && newRow < level
        && newColumn >= 0
        && newColumn < level
        && !(i === 0 && j === 0)
      ) {
        neighbors.push(newRow * level + newColumn);
      }
    });
  });

  return neighbors;
}

function addCellsToHtml(array) {
  console.log(array);
  const filled = document.querySelector('.filled');
  const cells = array
    .map((element) => `<div class="cell ${element}"></div>`)
    .join('');
  filled.innerHTML = cells;
}

function createCells() {
  const quantity = level ** 2;
  const cellQuantity = quantity - bombQuantity;
  const finishArray = [
    ...new Array(bombQuantity).fill('bomb'),
    ...new Array(cellQuantity).fill('simple'),
  ].sort(() => Math.random() - 0.5);

  finishArray.forEach((element, index) => {
    if (element === 'bomb') return;

    let count = 0;

    const neighbors = getNeighbors(index);
    neighbors.forEach((neighbor) => {
      if (finishArray[neighbor] === 'bomb') count += 1;
    });

    if (count > 0) finishArray[index] = `number${count}`;
  });

  addCellsToHtml(finishArray);
}

export default createCells;
