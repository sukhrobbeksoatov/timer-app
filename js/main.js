const elTimerText = document.querySelector("[data-timer-display]")

const birthdayDate = new Date("Jan 22, 2023 01:06:00").getTime()
let year;
let days;
let hours;
let minutes;
let seconds;

const timer = setInterval(() => {
  const now = new Date().getTime()
  const date = birthdayDate - now
  year = Math.trunc((date % (1000 * 60 * 60 * 24 * 12 * 365)) / 1000 / 60 / 60 / 24 / 365)
  days = Math.trunc((date % (1000 * 60 * 60 * 24 * 365)) / 1000 / 60 / 60 / 24)
  hours = Math.trunc((date % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
  minutes = Math.trunc((date % (1000 * 60 * 60)) / 1000 / 60)
  seconds = Math.trunc((date % (1000 * 60)) / 1000)

  if (seconds < 0) {
    return elTimerText.innerHTML = `Tug'ilgan kuningiz ${year * (-1)} yil, ${days * (-1)} kun, ${hours * (-1)} soat, ${minutes * (-1)} daqiqa, ${seconds * (-1)} soniya kun avval o'tib ketgan, <br> dasturni qayta ishga tushiring`
  }

  elTimerText.innerHTML = `Tug'ilgan kuningizga ${year} yil, ${days} kun, ${hours} soat, ${minutes} daqiqa, ${seconds} soniya qoldi`
}, 1000)