const numberToTen = function() {
  let sum = 0;
  for(let i=0; i<10; i++){
    sum = sum + i;
    if(sum === 10){
      return sum;
    }
  }
}

console.log(numberToTen())