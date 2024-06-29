let counter = 0;

function runTimer() {
  
  counter++;

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const time = `${hours}:${minutes}:${seconds}`
  console.log(time);

  if (counter >= 5) {
   
    clearInterval(intervalID);
    
  }
}

let intervalID = setInterval(runTimer, 5000);
