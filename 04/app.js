let interval
let counter = 0

const runTimer = () => {
	const time = new Date().toLocaleTimeString()
	console.log(`0becna godzina to:${time}`)
	counter++
	if (counter === 5) {
		clearInterval(interval)
	}
}
interval = setInterval(runTimer, 5000)
