function runTimer() {
  let counter = 0;
  const intervalId = setInterval(function() {
      const currentTime = new Date().toLocaleTimeString();
      console.log(currentTime);
      counter++;
      if (counter === 5) {
          clearInterval(intervalId);
      }
  }, 5000); 
}

runTimer();

