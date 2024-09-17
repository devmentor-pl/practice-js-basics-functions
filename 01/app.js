//US format
function showTimeUS() {
  const time = new Date().toLocaleTimeString()
  console.log(time)
}

showTimeUS()

//PL format
function showTimePL() {
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }
  const time = new Date().toLocaleTimeString("pl-PL", options)
  console.log(time)
}

showTimePL()
