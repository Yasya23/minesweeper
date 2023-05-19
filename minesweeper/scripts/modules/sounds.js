import data from './data.js';

const {
  click, lose, win, flaged, generalClick, rangeChange,
} = data.sounds;

const sounds = {
  click: new Audio(click),
  lose: new Audio(lose),
  win: new Audio(win),
  flaged: new Audio(flaged),
  generalClick: new Audio(generalClick),
  rangeChange: new Audio(rangeChange),
};

let currentSound = null;

function playSound(value) {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }
  setTimeout(() => {
    if (sounds[value]) {
      currentSound = sounds[value];
      currentSound.play();
    }
  }, 100);
}

export default playSound;
