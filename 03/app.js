const getNumber = function (num) {
	let result = 0

	for (let i = 0; i <= num; i++) {
		 result = result + i
		
	}
	return result
}


const sum = getNumber(4)
console.log(sum);