const TIME = 60 * 20 * 1000
const startDate = Date.now()
const timer = document.getElementsByClassName('timer')[0]

function main() {
  setInterval(tick, 1000)
}

function tick() {
  let time = Math.floor((TIME - (Date.now() - startDate)) / 1000)

  if (time < 0) return

  let minutes = Math.floor(time / 60).toString()
  let seconds = Math.floor(time % 60).toString()

  minutes = minutes.length < 2 ? '0' + minutes : minutes
  seconds = seconds.length < 2 ? '0' + seconds : seconds

  timer.textContent = `${minutes}:${seconds}`
}

main()
