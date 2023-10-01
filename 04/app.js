function runTimer() {
	let counter = 0

	// console.log(new Date().toLocaleTimeString())

	setInterval(function () {
		if (counter < 5) {
			console.log(new Date().toLocaleTimeString())
			counter++
		} else {
			clearInterval()
		}
	}, 5000)
}

runTimer()
