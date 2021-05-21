function runTimer(){
  let counter = 1;
  let id = setInterval(function() {
      const currentDate = new Date().toLocaleTimeString();
      console.log(currentDate);
      counter++;

      if(counter>5) {
          clearInterval(id);
      }
  }, 5000);
} 

runTimer();