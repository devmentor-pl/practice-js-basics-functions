function runTimer () {
  console.log('before setInterval()');
  idInterval = setInterval(showCounter, 5000);
  console.log('after setInterval()');
  }
  
  function showTime() {
      const time = (new Date()).toLocaleTimeString();
    console.log(time);
    }
  
  
  let idInterval;
  let counter = 0;
  
  const showCounter = function() {
    console.log(counter);
    counter++;
    
    if(counter > 5) {
    clearInterval(idInterval);
  }
    showTimer(); 
  }
  
  idInterval = runTimer(showCounter, 5000);
    
    