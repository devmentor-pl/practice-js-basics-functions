function runTimer() {

      let counter = 0

      const idInterval = setInterval(function () {
            const time = (new Date()).toLocaleTimeString();
            console.log(time);

            counter++;
           
            if (counter === 5) {
                  clearInterval(idInterval)
            }

      }, 5000);
}

runTimer()
