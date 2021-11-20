let sum = 0;

const sumOfNumbers = function(message) {

    const userNumber = parseInt(prompt('Give me a number' , message));
    console.log('Your number is:' , userNumber);

    for(let i=0; i <= userNumber; i++) {

        sum = sum + i;


        if(i === userNumber) {
        console.log('The sum of the numbers from 0 to your number is:' , sum);
        }

    }
}

sumOfNumbers();