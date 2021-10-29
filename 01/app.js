const showTime = () => {
  // W poleceniu była mowa o "czasie", a snippet pokazywał tylko datę, więc trochę go zmieniłem
  const time = new Date().toLocaleString();
  console.log(time);
};

showTime();
