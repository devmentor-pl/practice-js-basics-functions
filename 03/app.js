const getSum = function (currentNumber) {

      let result = 0
      for (let i = 1; i <= currentNumber; i++) {
            result = result + i;
      }
      return result;
}

const resSum = getSum(4);
console.log(resSum);



