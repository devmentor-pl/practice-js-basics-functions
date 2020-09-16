let counter = 1;

const runTimer = () => {
  let idInterval = setInterval(function () {
  let time = (new Date()).toLocaleTimeString();
  if(counter === 5) {
    clearInterval(idInterval);
  }
  console.log(time)
  counter++
  }, 1000);
}

runTimer()
