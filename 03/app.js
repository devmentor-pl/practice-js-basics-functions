const naturalSeries = function (digit) {
	let result = 0;
	for (let i = 0; i < digit; i++) {
		result += i + 1;
	}
	return result;
};

console.log(naturalSeries(4));
