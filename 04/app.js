let counter = 0;

intervalId = setInterval(function () {
  date = (new Date()).toLocaleTimeString();
  console.log(date);
  counter += 1;
  if (counter >= 5) {
    clearInterval(intervalId);
  };
}, 5000);