function showTime() {
  const time = new Date().toLocaleTimeString();
  console.log(time);
}

function showDate() {
  const date = new Date().toLocaleDateString();
  console.log(date);
}

showDate();
showTime();