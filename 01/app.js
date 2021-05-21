function showTime() {
    const time = new Date().toLocaleTimeString(); // na mdn new nie było w () czy sugerujesz jednak by je stawiać?
    console.log(time);
}
showTime();