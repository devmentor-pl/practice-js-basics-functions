const sumToEndNumber = function (num) {
	let result = 0;

	for (let i = 1; i <= num; i++) {
		result = result + i;
	}

	return result;
};

const endSum = sumToEndNumber(4);

console.log(endSum);
