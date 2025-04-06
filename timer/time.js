let timerRunning = false;
let timerInterval;
let seconds = 60; // Start from 60 seconds
const intervalSpeed = 500; // Timer updates every 500ms (0.5 seconds)

// Update timer display
const updateTimerDisplay = () => {
  const wholeSeconds = Math.floor(seconds); // Only display whole seconds
  const minutes = String(Math.floor(wholeSeconds / 60)).padStart(2, "0");
  const remainingSeconds = String(wholeSeconds % 60).padStart(2, "0");
  document.getElementById("timer").textContent = `${minutes}:${remainingSeconds}`;

  const degrees = (seconds / 60) * 360; // Calculate the degree based on remaining seconds
  document.documentElement.style.setProperty("--degrees", `${degrees}deg`);
};

// Start Countdown
document.getElementById("play").addEventListener("click", () => {
  if (!timerRunning && seconds > 0) {
    timerRunning = true;
    timerInterval = setInterval(() => {
      if (seconds > 0) {
        seconds -= 0.5; // Decrease time by 0.5 seconds internally
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerRunning = false;
        alert("Time's up!"); // Optional alert
      }
    }, intervalSpeed);
  } else if (timerRunning) {
    // Pause the timer if it's running
    timerRunning = false;
    clearInterval(timerInterval);
  }
});

// Reset Timer
document.getElementById("reset").addEventListener("click", () => {
  timerRunning = false;
  clearInterval(timerInterval);
  seconds = 60; // Reset to 60 seconds
  updateTimerDisplay();
});

// Initialize timer display on load
updateTimerDisplay();
