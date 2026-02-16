let counter = 0;

const interval = setInterval(runTimer, 5000);

function runTimer() {
	const time = new Date().toLocaleTimeString();
	console.log(time);

	counter++;

	if (counter >= 5) {
		clearInterval(interval);
	}
}
