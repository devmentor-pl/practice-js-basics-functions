function showTime() {
    const time = new Date();
    console.log('Aktualna data to: ' + time.toLocaleDateString());
    console.log('Aktualna godzina to: ' + time.toLocaleTimeString());
};

showTime();