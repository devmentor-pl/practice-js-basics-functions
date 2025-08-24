function runTimer() {
	let counter = 0;
	const refreshIntervalId = setInterval(() => {
		console.log(new Date().toLocaleTimeString());
		counter++;
		if (counter === 5) {
			clearInterval(refreshIntervalId);
		}
	}, 5000);
}

runTimer();
