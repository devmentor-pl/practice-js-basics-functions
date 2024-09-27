const sum = function (num) {
	let result = 0;
	for (let i = 1; i <= num; i++) {
		result += i;
	}
	return result;
};

console.log(sum(4));
