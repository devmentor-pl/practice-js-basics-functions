const showTime = () => {
    const time = new Date();
    console.log(`${time.getHours()}:${time.getMinutes()}:${time.getUTCSeconds()}`);
}

showTime();