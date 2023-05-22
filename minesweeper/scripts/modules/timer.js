import { saveTimerState } from './save-results.js';

let hour = 0;
let minutes = 0;
let seconds = 0;
let timeInterval;
let isTimer = false;

function formatTime() {
  const hourValue = hour ? `${hour}:` : '';
  const minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  const secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  const result = `${hourValue}${minutesValue}:${secondsValue}`;
  const timer = document.querySelector('.timer');
  timer.textContent = result;
}

function startTimer() {
  if (!isTimer) {
    isTimer = true;
    timeInterval = setInterval(() => {
      formatTime();
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
  return document.querySelector('.timer').textContent;
}

function pauseTimer() {
  clearInterval(timeInterval);
  isTimer = false;
}

function updateTimer(h, min, sec) {
  hour = h;
  minutes = min;
  seconds = sec;
  formatTime(hour, minutes, seconds);
}

function resetTimer() {
  if (isTimer) pauseTimer();
  hour = 0;
  minutes = 0;
  seconds = 0;
  formatTime();
  saveTimerState([hour, minutes, seconds]);
}

export {
  startTimer, resetTimer, pauseTimer, returnTime, formatTime, updateTimer,
};
