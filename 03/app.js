const getSum = (el) => {
	let sum = 0;
	for (let i = 0; i <= el; i++) {
		sum += i;
	}
	return sum;
};
const sum = getSum(4);

console.log(sum);
