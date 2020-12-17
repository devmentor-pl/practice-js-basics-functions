function showTime() {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    console.log(`Current time is: ${time} and date: ${date}`);
}

showTime();