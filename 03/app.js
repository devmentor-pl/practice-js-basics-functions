// with return statement
let result = 0
const addition = function (maxNum) {
	for (let i = 1; i <= maxNum; i++) {
		result += i
	}
	console.log(result)
	return result
}

addition(4)

// without return statement
const additionSecond = function (maxNum) {
	result = 0
	for (let i = 1; i <= maxNum; i++) {
		result += i
	}
	console.log(result)
}

additionSecond(4)
