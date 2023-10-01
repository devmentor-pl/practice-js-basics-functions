const showTime = function () {
	const time = new Date().toLocaleTimeString()
	console.log(time)
}

showTime()

//  With return keyword
const time = function () {
	return new Date().toLocaleTimeString()
}

console.log(time())
