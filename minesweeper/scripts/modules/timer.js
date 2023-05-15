let hour = 0;
let minutes = 0;
let seconds = 0;
let timeInterval;

function startTimer() {
  const timer = document.querySelector('.timer');
  timeInterval = setInterval(() => {
    const hourValue = hour ? `${hour}:` : '';
    const minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    const secondsValue = seconds < 10 ? `0${seconds}` : seconds;
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

function resetTimer() {
  const timer = document.querySelector('.timer');
  clearInterval(timeInterval);
  hour = 0;
  minutes = 0;
  seconds = 0;
  timer.textContent = '00:00';
}

export { startTimer, resetTimer };
