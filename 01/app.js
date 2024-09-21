const showTime = () => {
    setInterval(() => {
        const date = new Date()
        console.log(date.toLocaleTimeString())
    }, 1000)
};

showTime();