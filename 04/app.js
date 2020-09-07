let counter = 1;

const runTimer = () => {
  let time = (new Date()).toLocaleTimeString();
  if(counter === 5) {
    clearInterval(idInterval);
  }
  console.log(time)
  counter++
}

idInterval = setInterval(runTimer, 5000);