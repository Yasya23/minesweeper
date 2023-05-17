let hour = 0;
let minutes = 0;
let seconds = 0;
const hourValue = hour ? `${hour}:` : '';
const minutesValue = minutes < 10 ? `0${minutes}` : minutes;
const secondsValue = seconds < 10 ? `0${seconds}` : seconds;
let timeInterval;
let isTimer = false;

function startTimer() {
  if (!isTimer) {
    isTimer = true;
    const timer = document.querySelector('.timer');
    timeInterval = setInterval(() => {
      timer.textContent = `${hourValue}${minutesValue}:${secondsValue}`;
      seconds += 1;
      if (seconds === 60) {
        minutes += 1;
        seconds = 0;
      }
      if (minutes === 60) {
        hour += 1;
        minutes = 0;
      }
    }, 1000);
  }
}

function returnTime() {
 return `${hourValue}${minutesValue}:${secondsValue}`;
}

function pauseTimer() {
  clearInterval(timeInterval);
}

function resetTimer() {
  const timer = document.querySelector('.timer');
  hour = 0;
  minutes = 0;
  seconds = 0;
  timer.textContent = '00:00';
  isTimer = false;
}

export { startTimer, resetTimer, pauseTimer, returnTime };
