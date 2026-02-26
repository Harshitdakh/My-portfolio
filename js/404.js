let seconds = 5;
const countdownElement = document.getElementById('countdown');

const timer = setInterval(() => {
    seconds--;
    countdownElement.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = "../index.html"; // Corrected path
    }
}, 1000);