// let idInterval
// let counter = 1

// const runTimer = function () {
// 	const time = new Date().toLocaleTimeString()
// 	console.log(time)
// 	counter++
// 	if (counter > 5) {
// 		clearInterval(idInterval)
// 	}
// }
// idInterval = setInterval(runTimer, 5000)

// rozwiązanie od devmentor
function runTimer(params) {
	let counter = 0
	const idInterval = setInterval(function () {
		const time = new Date().toLocaleTimeString()
		console.log(time)
		counter++

		if (counter === 5) {
			clearInterval(idInterval)
		}
	}, 2000)
}

runTimer()
