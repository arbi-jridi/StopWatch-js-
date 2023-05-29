const play = document.getElementById("play");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let timer = document.getElementById("timer");
let container = document.getElementById("container");
let timo = null;

let hours = 0;
let minutes = 0;
let seconds = 0;

function playing() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = h + ":" + m + ":" + s;
}

function playit() {
  if (timo !== null) {
    clearInterval(timo);
  }
  timo = setInterval(playing, 1000);
}
function stoping() {
  clearInterval(timo);
}

function reseting() {
  clearInterval(timo);
  hours = 0;
  minutes = 0;
  seconds = 0;
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = h + ":" + m + ":" + s;
}
