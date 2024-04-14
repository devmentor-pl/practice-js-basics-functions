let counter = 1;
let counterTwo = 1;
let idInterval;
let stopTime;

function runTime() {
	const time = new Date().toLocaleTimeString();
	console.log(time);

	const showTimeCounter = function () {
		counterTwo++;
		if (counterTwo > 5) {
			clearInterval(stopTime);
		}
	};
}
const showCounter = function () {
	console.log(counter);
	counter++;

	if (counter > 5) {
		clearInterval(idInterval);
	}
};

idInterval = setInterval(showCounter, 2000);
stopTime = setInterval(showCounter, 2000);
