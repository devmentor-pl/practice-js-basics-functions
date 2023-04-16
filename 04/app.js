let idInterval;
let counter=0;

const runTimer=function(){ 
   const time = (new Date()).toLocaleTimeString();
   counter++;
   if(counter>=5){
      clearInterval(idInterval);
   }
   console.log(time+"    counter: "+counter);
   return time;
}

idInterval = setInterval(runTimer,5000);

