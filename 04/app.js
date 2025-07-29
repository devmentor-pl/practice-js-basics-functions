let idInterval;
let counter = 0;

runTimer = function () {
  counter++;
  if (counter > 5) {
    clearInterval(idInterval);
    console.log("Timer has been ended.");
    return;
  }
  console.log(`${counter}: ${Date()}`);
};

idInterval = setInterval(runTimer, 5000);
