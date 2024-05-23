document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('p').innerText}`);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('p').innerText}`);
        });
    });

    const form = document.getElementById('interaction-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const userInput = document.getElementById('user-input').value;

        // Placeholder for AI API interaction
        const response = `You asked: "${userInput}". Here's your guidance: Stay positive and trust the journey.`;

        const responseContainer = document.getElementById('interaction-response');
        responseContainer.innerHTML = `<p>${response}</p>`;
    });
});
