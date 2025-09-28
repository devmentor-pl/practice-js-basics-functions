function runTimer() {
	let counter = 0;
	let intervalID = setInterval(function () {
		let time = new Date().toLocaleTimeString();
		console.log(time);
		counter++;
		if (counter > 4) {
			clearInterval(intervalID);
		}
	}, 5000);
}

runTimer();
