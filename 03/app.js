let value = 0;

const fn = function(finalValue) {
    for(let i=1; i<=finalValue; i++) {
        value+=i;
    }
    return value;
}

fn();

const result = fn(4);

console.log(result);