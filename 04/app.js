let i = 1;
const counter = 5;
let interval;

const runTimer = function () {
  if (i === counter) clearInterval(interval);

  const time = new Date().toLocaleTimeString();
  console.log(time);
  i++;
};

interval = setInterval(runTimer, 5000);
