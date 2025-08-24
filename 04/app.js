function runTimer() {
    let counter = 0; // Licznik wyświetlonych informacji

    const intervalId = setInterval(function () {
        const currentTime = new Date();
        console.log(`Aktualny czas: ${currentTime.toLocaleTimeString()}`);

        counter++;

        if (counter >= 5) {
            clearInterval(intervalId); // Zatrzymanie interwału po 5 wyświetleniach
        }
    }, 5000); // Interwał co 5 sekund (5000 ms)
}

runTimer();
