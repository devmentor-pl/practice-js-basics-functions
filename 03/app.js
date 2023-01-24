const sumNumbers = function (num) {
	let result = 0

	for (let i = 0; i <= num; i++) {
		result += i
	}
	return result
}

const sum = sumNumbers(4)
console.log(sum)
