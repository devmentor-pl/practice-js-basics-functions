let loop
let counter = 0
const runTimer = () => {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter++
    if (counter > 4)
        clearInterval(loop)
}
loop = setInterval(runTimer,5000)