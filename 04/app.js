let idInterval;
let counter = 0;

const runTimer = function () {
  const time = new Date().toLocaleTimeString();
  console.log(time);
  counter++;
  if (counter === 5) {
    clearInterval(idInterval);
  }
};

idInterval = setInterval(runTimer, 5000);

// function runTimer() {
//     let counter = 0;
//     const idInterval = setInterval(function () {
//       const time = new Date().toLocaleTimeString();
//       console.log(time);
//       counter++;
//       if (counter === 5) {
//         clearInterval(idInterval);
//       }
//     }, 5000)
//   }
  
//   runTimer();

// function runTimer(num, milliseconds) {
//   console.log("Start timer, display the time " + num + " times every " + (Math.floor(milliseconds/1000)) + " seconds.");
//   let counter = 0;
//   const idInterval = setInterval(function () {
//     const time = new Date().toLocaleTimeString();
//     console.log(time);
//     counter++;
//     if (counter === num) {
//       clearInterval(idInterval);
//       console.log("end timer")
//     }
//   }, milliseconds)
// }

// runTimer(5, 5000);