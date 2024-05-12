const timeInterval = 5;
let counter = 0;
const stopInterval = 5;

function runTime() {
	const time = new Date().toLocaleTimeString();
	console.log(time);

	for (let i = 1; i <= timeInterval; i++) {
		console.log(i);
		
	}
}

setInterval(function () {
	runTime();
}, 2000);
