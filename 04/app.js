function runTimer(rounds, roundTime) {
	let round = 0;

	const runTimerInterval = setInterval(function () {
		const time = new Date().toLocaleTimeString();
		console.log(time);
		round++;
		if (round === rounds) {
			clearInterval(runTimerInterval);
		}
	}, roundTime);
}

runTimer(5,5000);
