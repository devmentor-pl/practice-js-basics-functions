let idInterval;
let counter = 0;

const runTimer = function () {
  const time = new Date().toLocaleTimeString();
  console.log(`Aktualny czas: ${time}`);
  counter++;
  if (counter === 5) {
    clearInterval(idInterval);
    console.log(`Zatrzymano wyświetlanie czasu o godzinie: ${time}`);
  }
};
idInterval = setInterval(runTimer, 5000);
