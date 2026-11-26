const numberToTen = function(limit) {
  let sum = 0;
  for(let i=0; i<=limit; i++){
    sum = sum + i;
  } 
  return sum;
}

console.log(numberToTen(4))