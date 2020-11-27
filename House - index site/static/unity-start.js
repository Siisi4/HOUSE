// build up the timer
const timer = document.getElementById('timer');
let timeSecond = 0;
timer.innerHTML = '00:00';
function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timer.innerHTML = `
    ${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
}

let x;
// eslint-disable-next-line no-unused-vars
function startTimer() {
  x = setInterval(() => {
    // how can we make x accessible to clearInterval(line 24).
    timeSecond++;
    displayTime(timeSecond);
  }, 1000);

  // still need to modify , set condition to disable setinterval after one click
  // if (window.onclick === true) clearInterval(x);
}

// startTimer(); will be executed in unity.

// function to stop timer..
// eslint-disable-next-line no-unused-vars
function stopTimer() {
  // eslint-disable-next-line no-lone-blocks
  {
    clearInterval(x);
  }
}

/*
// stopTimer();will be executed in unity.

// S//STOCKAGE LOCAL
function
if (localStorage.getItem('Time')!=='';
localStorage.setItem('Time', timeSecond);

const highScore = localStorage.getItem('Time');

if (highScore < timeSecond) {
  alert('Bravo, vous avez été plus rapide ! ');
  localStorage.setItem('Time', timeSecond);
}
*/

// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-undef
// eslint-disable-next-line no-unused-vars
const unityInstance = UnityLoader.instantiate(
  'unityContainer',
  'Build/AlgoHouse.json',
  // eslint-disable-next-line no-undef
  { onProgress: UnityProgress },
);
