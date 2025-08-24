const naturalSeries = function (digit) {
	let result = 0;
	for (let i = 1; i <= digit; i++) {
		result += i;
	}
	return result;
};

console.log(naturalSeries(4));
