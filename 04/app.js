const runTimer = () => {
  let displayCount = 0;
  const timerInterval = setInterval(() => {
    displayCount++;
    console.log(new Date().toLocaleString());

    if (displayCount === 5) {
      clearInterval(timerInterval);
    }
  }, 5000);
};

runTimer();
