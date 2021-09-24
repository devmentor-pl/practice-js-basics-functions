let counter = 1;
let idInterval;

const runTimer = function() {


let time = (new Date()).toLocaleTimeString();

    console.log(time);
    const breakFuction = counter < 5 ? counter ++ : clearInterval(idInterval);

}


idInterval = setInterval(runTimer,5000);