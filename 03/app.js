function sum(a, b) {
    return a+b
}
function result(c) {
    let number = 0;
    for(let i=1; i<=c; i++) {
        number = sum(number, i);
    }
    console.log(number);
}
result(4);



