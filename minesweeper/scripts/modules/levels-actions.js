const levels = {
  easy: 10,
  medium: 15,
  hard: 25,
};

let level = levels.easy;

function changeValues(value) {
  level = value;
  const filled = document.querySelector('.filled');
  filled.style.gridTemplateColumns = `repeat(${value}, minmax(10px, 55px))`;
}

function changeLevel(value) {
  if (value === 'easy') changeValues(levels.easy);
  if (value === 'meduim') changeValues(levels.medium);
  if (value === 'hard') changeValues(levels.hard);
}

function returnLevel() {
  return level;
}

export { changeLevel, returnLevel };
