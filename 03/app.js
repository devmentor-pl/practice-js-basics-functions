const sum = num => {
	let result = 0;
	for (let x = 1; x <= num; x++) {
		result += x;
	}
	return result;
};

console.log(sum(5));
