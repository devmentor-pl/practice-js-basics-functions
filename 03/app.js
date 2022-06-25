let sum = 0;
const getSum = (el) => {
	for (let i = 0; i <= el; i++) {
		sum += i;
	}
	return sum;
};
getSum(4);

console.log(sum);
