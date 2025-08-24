
const fn = function(x) {
  const counter = parseInt(prompt(x));
  let sum = 0;
  
  for (let i = 1; i <= counter; i++) {
    sum = sum + i;
  }
  return console.log("suma kolejnych liczb to " + sum); 
}

fn("Podaj zakres dodawania")

