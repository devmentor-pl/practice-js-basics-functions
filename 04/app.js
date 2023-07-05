let idInterval;
let counter = 1;
const runTimer = function () {
  const time = new Date().toLocaleTimeString();
  console.log(time);
  counter++;

  if (counter > 5) {
    clearInterval(idInterval);
    console.log('koniec');
  }
};

idInterval = setInterval(runTimer, 5000);
