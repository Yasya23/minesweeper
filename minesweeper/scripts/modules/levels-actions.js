const levels = {
  easy: 10,
  medium: 15,
  hard: 25,
};

let level = levels.easy;

function removeLevelClass() {
  document.body.classList.remove('hard');
  document.body.classList.remove('medium');
}

function addLevelClassToBody(value) {
  removeLevelClass();
  document.body.classList.add(value);
}

function changeValues(value) {
  level = value;
  const filled = document.querySelector('.filled');
  filled.style.gridTemplateColumns = `repeat(${value}, minmax(10px, 55px))`;
}

function changeLevel(value) {
  if (value === 'easy') {
    changeValues(levels.easy);
    removeLevelClass();
  }
  if (value === 'medium') {
    changeValues(levels.medium);
    addLevelClassToBody(value);
  }
  if (value === 'hard') {
    changeValues(levels.hard);
    addLevelClassToBody(value);
  }
}

function returnLevel() {
  return level;
}

function blockedChooseLevel(value) {
  document.getElementById('level').disabled = value;
}

export { changeLevel, returnLevel, blockedChooseLevel };
