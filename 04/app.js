function runTimer() {
  let count = 0

  const stopTimeInterval = setInterval(() => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }
    const time = new Date().toLocaleTimeString("pl-PL", options)
    console.log(time)
    count++

    if (count === 5) {
      clearInterval(stopTimeInterval)
    }
  }, 5000)
}

runTimer()
