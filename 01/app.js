// Watch your local time for next 3 seconds! ;)

let counter = 1;

function showTime() {
  let time = (new Date()).toLocaleTimeString();
  console.log(time);

  if (counter === 3) {
    clearInterval(secInterval)
  }
  counter++
}


secInterval = setInterval(showTime, 1000)