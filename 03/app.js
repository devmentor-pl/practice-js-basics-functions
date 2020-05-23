const showSum = function()
{
    
    const arr = [];
    for(let i = 0; i<5; i++)
    {
        arr.push(i)
    }
    const makeSum = arr.reduce((acc, val) => acc + val);
    
    return makeSum;
}

const showInConsole = showSum();
console.log(showInConsole);

