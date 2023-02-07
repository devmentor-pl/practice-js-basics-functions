function sum(num) {
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    console.log(result);
    return result;       
}
sum(4);