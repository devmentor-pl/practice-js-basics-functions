const sumNumbers = (number) => {
	let result = 0;
	for (let i = 0; i <= number; i++) {
		result += i;
	}
	return result;
};

console.log(sumNumbers(4));
