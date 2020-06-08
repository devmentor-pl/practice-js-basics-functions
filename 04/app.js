let counter = 0;

const fun = function runTimer() {
  const time = new Date().toLocaleDateString();
  console.log(time);
  counter++;

  const idInterval = setInterval(fun, 1000);

  if (counter >= 5) {
    clearInterval(idInterval)
  }
};
