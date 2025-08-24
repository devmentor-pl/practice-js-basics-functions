let idInterval;
let stop=0
const runTimer=  () =>{
      const time = (new Date()).toLocaleTimeString(); 
  console.log(time)
stop++
if(stop > 5) {
clearInterval(idInterval);
}
 }
idInterval= setInterval(runTimer,5000);

 
