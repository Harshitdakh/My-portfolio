// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add click event listener to toggle answers
faqQuestions.forEach((question) =>
{
    question.addEventListener('click', () =>
    {
        const answer = question.nextElementSibling; // Get the corresponding answer element

        // Toggle the display of the answer
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }

        // Optionally, change the button's appearance (optional styling)
        question.classList.toggle('active');
    });
});
