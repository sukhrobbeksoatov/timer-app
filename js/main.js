const elTimerText = document.querySelector("[data-timer-display]")

const birthdayDate = new Date("March 15, 2023 00:00:00").getTime()

const timer = setInterval(() => {
  const now = new Date().getTime()
  const date = birthdayDate - now

  const year = Math.trunc((date % (1000 * 60 * 60 * 24 * 365)) / 1000 / 60 / 60 / 24 / 365)
  const days = Math.trunc((date % (1000 * 60 * 60 * 24 * 365)) / 1000 / 60 / 60 / 24)
  const hours = Math.trunc((date % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
  const minutes = Math.trunc((date % (1000 * 60 * 60)) / 1000 / 60)
  const seconds = Math.trunc((date % (1000 * 60)) / 1000)

  if (days === 0) {
    elTimerText.innerHTML == "Tug'ilgan kuningiz kirib keldi tabriklayman!"
  }

  elTimerText.innerHTML = `Tug'ilgan kunimga ${year} yil, ${days} kun, ${hours} soat, ${minutes} daqiqa, ${seconds} soniya qoldi`
}, 1000)