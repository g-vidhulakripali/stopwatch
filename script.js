let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.querySelector(".display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// Function to update the display with the current timer values
function updateDisplay() {
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displayHours = hours < 10 ? "0" + hours : hours;

  display.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

// Function to start the timer
function startTimer() {
  timer = setInterval(() => {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    updateDisplay();
  }, 1000);
}

// Function to stop the timer without resetting the values
function stopTimer() {
  clearInterval(timer);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
