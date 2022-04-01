function showTime() {
    const time = new Date();

    let hour = time.getHours();
    let minutes = time.getMinutes();
    let secounds = time.getSeconds();
    console.log(hour + ':' + minutes + ':' + secounds);
}


showTime();