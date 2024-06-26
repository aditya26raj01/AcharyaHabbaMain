// Countdown

const targetDateTime = new Date("2024-05-10T14:00:00");

function updateCountdown() {
  const currentDate = new Date();

  const timeRemaining = targetDateTime - currentDate;

  if (timeRemaining <= 0) {
    document.getElementById("countdown").innerHTML =
      "Prepare yourself for the Bangalore biggest fest";
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <span class="stext">${days}</span> day(s) 
        <span class="stext">${hours}</span> hour(s) 
        <span class="stext">${minutes}</span> minute(s) 
        <span class="stext">${seconds}</span> second(s)
        `;
  }
}

updateCountdown();

setInterval(updateCountdown, 1000);
