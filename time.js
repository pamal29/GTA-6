const releaseDate = new Date("May 26, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = releaseDate - now;

    if (distance <= 0) {
        document.querySelector('.countdown').innerHTML = "🎮 GTA 6 is out now!";
        clearInterval(timer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);