// ! Variables for buttons
const startStopBtn = document.querySelector(".btn-play");
const restBtn = document.querySelector(".btn-reset");
let displayTimer = document.querySelector("#timer");
// ! Variables for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

// ! Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// ! Variable for setInterval & timerStatus
let timerInterval = null;
let timerStatus = "stopped";

// todo : stopWatch
function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    leadingSeconds = seconds < 10 ? "0" + seconds.toString() : seconds;
    leadingMinutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    leadingHours = hours < 10 ? "0" + hours.toString() : hours;

    displayTimer.innerHTML = `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

// window.setInterval(stopWatch, 100);

startStopBtn.addEventListener("click", function () {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = `<i class="fa-solid fa-pause " ></i>`;
        startStopBtn.style.backgroundColor = "#FFD43B";
        timerStatus = "started";
        console.log(timerStatus, timerInterval);
    } else {
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        startStopBtn.style.backgroundColor = "rgb(141, 203, 49)";
        timerStatus = "stopped";
        console.log(timerStatus, timerInterval);
    }
});

restBtn.addEventListener("click", function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTimer.innerHTML = "00:00:00";
    window.setInterval(stopWatch, 1000);
});
