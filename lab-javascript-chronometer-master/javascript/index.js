const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const minutes = chronometer.splitClick().split(":")[0];
  minDec.innerHTML = minutes.split("")[0];
  minUni.innerHTML = minutes.split("")[1];
  // console.log(minutes + "je suis les minutes");
}

function printSeconds() {
  const secondes = chronometer.splitClick().split(":")[1];

  secDec.innerHTML = secondes.split("")[0];
  secUni.innerHTML = secondes.split("")[1];

  // console.log(secondes + "je suis les secondes");
}

// ==> BONUS
function printMilliseconds() {
  const milliSecondes = chronometer.splitClick().split(":")[2];

  milDec.innerHTML = milliSecondes.split("")[0];
  milUni.innerHTML = milliSecondes.split("")[1];

  // console.log(milliSecondes + "je suis les secondes");
}

function printSplit() {
  splits.innerHTML += `<li>${chronometer.splitClick()} </li>`;
}

function clearSplits() {
  splits.innerHTML = "";
}

function setStopBtn() {
  if (btnLeft.classList.contains("start")) {
    btnLeft.classList.remove("start");
    btnLeft.classList.add("stop");
    btnLeft.textContent = "STOP";
  }
}

function setSplitBtn() {
  if (btnRight.classList.contains("reset")) {
    btnRight.classList.remove("reset");
    btnRight.classList.add("split");
    btnRight.textContent = "SPLIT";
  }
}

function setStartBtn() {
  if (btnLeft.classList.contains("stop")) {
    btnLeft.classList.add("start");
    btnLeft.classList.remove("stop");
    btnLeft.textContent = "START";
  }
}

function setResetBtn() {
  if (btnRight.classList.contains("split")) {
    btnRight.classList.remove("split");
    btnRight.classList.add("reset");
    btnRight.textContent = "RESET";
  }
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (btnLeft.classList.contains("start")) {
    setSplitBtn();
    setStopBtn();
    chronometer.startClick(printTime);
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (btnRight.classList.contains("reset")) {
    chronometer.resetClick();
    clearSplits();
    printTime();
  } else {
    printSplit();
  }
});
