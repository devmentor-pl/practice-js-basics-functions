let sum = 0;

const sumOfNumbers = function(msg) {

    const userInput = parseInt(prompt('Enter a number' , msg));
    
    console.log('The number is:' , userInput);
    return userInput;

    for(let i=0; i <= userInput; i++) {

        sum += i;

        if(i === userInput) {
        console.log('The sum of numbers is:' , sum);
        }

    }
}

sumOfNumbers();