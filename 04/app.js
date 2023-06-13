let idInterval;
let counter = 5;
let i = 1;


const runTimer = function () {
  const time = (new Date()).toLocaleTimeString();
  console.log(time);
  i++;

  if ( i > counter) {
    clearInterval(idInterval);
    console.log("koniec");
  }
}

idInterval = setInterval(runTimer, 5000);





