import { saveTimerState } from './save-results.js';

let hour = 0;
let minutes = 0;
let seconds = 0;
let timeInterval;
let isTimer = false;

function formatTime(h, min, sec) {
  const hourValue = h ? `${h}:` : '';
  const minutesValue = min < 10 ? `0${min}` : min;
  const secondsValue = sec < 10 ? `0${sec}` : sec;
  const result = `${hourValue}${minutesValue}:${secondsValue}`;
  const timer = document.querySelector('.timer');
  timer.textContent = result;
  // console.log(result, secondsValue);
  // return result;
}

function startTimer() {
  if (!isTimer) {
    isTimer = true;
    // const timer = document.querySelector('.timer');
    timeInterval = setInterval(() => {
      // timer.textContent = formatTime(hour, minutes, seconds);
      formatTime(hour, minutes, seconds);
      seconds += 1;
      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }
      if (minutes === 60) {
        hour += 1;
        minutes = 0;
      }
      saveTimerState([hour, minutes, seconds]);
    }, 1000);
  }
}

function returnTime() {
  return formatTime();
}

function pauseTimer() {
  clearInterval(timeInterval);
  isTimer = false;
}

function updateTimer(h, min, sec) {
  console.log(h, min, sec);
  hour = h;
  minutes = min;
  seconds = sec;
  formatTime(hour, minutes, seconds);
}

function resetTimer() {
  const timer = document.querySelector('.timer');
  hour = 0;
  minutes = 0;
  seconds = 0;
  timer.textContent = '00:00';
  isTimer = false;
  saveTimerState('00:00');
}

export {
  startTimer, resetTimer, pauseTimer, returnTime, formatTime, updateTimer,
};
