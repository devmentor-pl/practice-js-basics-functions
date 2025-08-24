let result = 0;

const sum = function (lastNumber){

    for(let i = 1; i <= lastNumber; i++){
        result = result + i;  
    }
    return result;
   
}

const sumOfNumbers = sum(4);
console.log(sumOfNumbers);

