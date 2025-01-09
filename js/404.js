// Countdown for redirection
let countdownElement = document.getElementById('countdown');
let countdownTime = 5;


const countdownInterval = setInterval(() =>
{
    countdownTime--;
    countdownElement.textContent = countdownTime;

    if (countdownTime <= 0) {
        clearInterval(countdownInterval);
        window.location.href = "../index.html"; // Redirect to home page
    }
}, 1000);