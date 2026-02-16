const sum = function (number) {
	let result = 0;
	if (number >= 0) {
		for (let i = 0; i <= number; i++) {
			result += i;
		}
	} else {
		for (let i = 0; i >= number; i--) {
			result += i;
		}
	}

	return result;
};

console.log(sum(4));
console.log(sum(-4));
console.log(sum(0));
console.log(sum(10));
console.log(sum(-10));
console.log(sum(1));
console.log(sum(-1));
