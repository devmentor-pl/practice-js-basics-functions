function runTime() {
  const time = new Date().toLocaleTimeString();
  console.log(time);
}

for (i = 0; i <= 5; i++) {
  setTimeout(runTime, 5000, i);
}
