let hour = 0;
let minutes = 0;
let seconds = 0;
let timeInterval;
let isTimer = false;

function formatTime() {
  const hourValue = hour ? `${hour}:` : '';
  const minutesValue = minutes < 10 ? `0${minutes}` : minutes;
  const secondsValue = seconds < 10 ? `0${seconds}` : seconds;
  return `${hourValue}${minutesValue}:${secondsValue}`;
}

function startTimer() {
  if (!isTimer) {
    isTimer = true;
    const timer = document.querySelector('.timer');
    timeInterval = setInterval(() => {
      timer.textContent = formatTime();
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
  return formatTime();
}

function pauseTimer() {
  clearInterval(timeInterval);
  isTimer = false;
}

function resetTimer() {
  const timer = document.querySelector('.timer');
  hour = 0;
  minutes = 0;
  seconds = 0;
  timer.textContent = '00:00';
  isTimer = false;
}

export {
  startTimer, resetTimer, pauseTimer, returnTime,
};
