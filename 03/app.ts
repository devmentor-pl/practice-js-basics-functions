const fn = function (num) {
  // console.log('I am working');
  let result = 0;
  for (i=1; i<=num; i++) {
    result = result + i;
  } return result;
}

console.log(fn(99));
