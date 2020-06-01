let minutes = 0;
let seconds = 0;

const startTimerButton = document.getElementById('startButton');
const stopTimerButton = document.getElementById('stopButton');
const resetTimerButton = document.getElementById('resetButton');
const para = document.getElementById('para');

let interval = null;

function time() {
    ++seconds;
    if (seconds >= 60) {
        ++minutes;
        seconds = 0;
    }
    para.textContent = minutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
    console.log(minutes);
    console.log(seconds);
}

function startTimer() {
    interval = setInterval(time, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    seconds = 0;
    minutes = 0;
    para.textContent = "0:00";
}

startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
resetTimerButton.addEventListener('click', resetTimer);
