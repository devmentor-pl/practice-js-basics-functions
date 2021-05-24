function runTimer () {
    console.log('before setInterval()');
    setInterval(showCounter, 5000);
    console.log('after setInterval()');
    }
    
    function showTime() {
        const time = (new Date()).toLocaleTimeString();
      console.log(time);
      }
      
    showTime();
    
    
    let idInterval;
    let counter = 5;
    
    const showCounter = function() {
      console.log(counter);
      counter++;
      
      if(counter > 5) {
      clearInterval(idInterval);
    }
    }
    
    idInterval = setInterval(showCounter, 5000);
    
    