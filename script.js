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
