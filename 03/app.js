
const maxNum=4;
let sum=0;
let num;

const sumOfNum = function(){
for(let i=1; i<=maxNum; i++){
sum = sum + i;
// console.log(sum);
}
return sum;
}
const Result = sumOfNum(maxNum);
console.log(Result)

