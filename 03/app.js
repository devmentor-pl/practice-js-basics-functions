const getSum = (el) => {
	let result = 0;
	for (let i = 0; i <= el; i++) {
		result += i;
	}
	return result;
};
const sum = getSum(4);

console.log(sum);
