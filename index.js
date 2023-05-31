var startButton = document.getElementById("startButton");
var countdownDisplay = document.getElementById("countdown");
var secondsSelect = document.getElementById("secondsSelect");
var minutesSelect = document.getElementById("minutesSelect");
var hoursSelect = document.getElementById("hoursSelect");
var timerRunning = false

startButton.addEventListener("click", () => {
if (timerRunning == false){
  var selectedValueSeconds = secondsSelect.value;
  var selectedValueMinutes = minutesSelect.value;
  var selectedValueHours = hoursSelect.value;
  selectedValueTotal =
    60 * 60 * parseInt(selectedValueHours) +
    60 * parseInt(selectedValueMinutes) +
    parseInt(selectedValueSeconds);
}

  var timerHeader = "TIMER >>> ";

  if (selectedValueSeconds || selectedValueTotal) {
    hoursDisplay = Math.floor(selectedValueTotal / 3600)
      .toString()
      .padStart(2, "0");
    minutesDisplay = Math.floor((selectedValueTotal % 3600) / 60)
      .toString()
      .padStart(2, "0");
    secondsDisplay = ((selectedValueTotal % 3600) % 60)
      .toString()
      .padStart(2, "0");
    countdownDisplay.textContent =
      timerHeader +
      hoursDisplay +
      " : " +
      minutesDisplay +
      " : " +
      secondsDisplay;
    countdownInterval = setInterval(function () {
      selectedValueTotal--;

      hoursDisplay = Math.floor(selectedValueTotal / 3600)
        .toString()
        .padStart(2, "0");
      minutesDisplay = Math.floor((selectedValueTotal % 3600) / 60)
        .toString()
        .padStart(2, "0");
      secondsDisplay = ((selectedValueTotal % 3600) % 60)
        .toString()
        .padStart(2, "0");
      countdownDisplay.textContent =
        timerHeader +
        hoursDisplay +
        " : " +
        minutesDisplay +
        " : " +
        secondsDisplay;
      if (selectedValueTotal <= 0) {
        clearInterval(countdownInterval);
        countdownDisplay.textContent = "Countdown finished!";
        alarmSound.play();
      }
    }, 1000);
  }
  startButton.disabled = true;
  stopButton.disabled = false;
  timerRunning = true
});

stopButton.addEventListener("click", () => {
    

  alarmSound.pause();
  alarmSound.currentTime = 0;
  clearInterval(countdownInterval);
  
  stopButton.disabled = true;
  startButton.disabled = false;
});

resetButton.addEventListener("click", () => {


  countdownDisplay.textContent = "";

  alarmSound.pause();
  alarmSound.currentTime = 0;
  clearInterval(countdownInterval);

  startButton.disabled = false;
  stopButton.disabled = true;
  timerRunning = false;
});
