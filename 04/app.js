const rounds = 5;

function runTimer() {
	let round = 0;

	const runTimerInterval = setInterval(function () {
		const time = new Date().toLocaleTimeString();
		console.log(time);
		round++;
		if (round === rounds) {
			clearInterval(runTimerInterval);
		}
	}, 5000);
}

runTimer();
