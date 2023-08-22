let sum = 0
const fn = function (number) {
	for (let i = 0; i <= number; i++) {
		sum += i
	}
	return sum
}

console.log(fn(4))
