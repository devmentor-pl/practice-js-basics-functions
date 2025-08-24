let result = 0;

const sum = function (x) {
	for (let i = 0; i <= x; i++) {
		result += i;
	}
	return result;
};

console.log(sum(4));
