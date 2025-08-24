let result =0;
let fn = function(numberFromUser)
{
    const userInput = prompt(numberFromUser);
    for(let i=0; i<=numberFromUser; i++) {
        result=result+i;
        console.log(result);
      
    } 
    return result;
}
