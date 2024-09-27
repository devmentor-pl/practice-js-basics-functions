let idInterval;
let counter = 1;

function runTimer() {
  const actualTime = new Date().toLocaleTimeString();
  counter++;
  console.log(actualTime);
  if (counter === 5) {
    clearInterval(idInterval);
    console.log(counter);
  }
}

idInterval = setInterval(runTimer, 5000);
