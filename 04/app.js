const runTimer = function () {
  const time = new Date().toLocaleTimeString();
  console.log(time);
};

setInterval(runTimer, 5000);
