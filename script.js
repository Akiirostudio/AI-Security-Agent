document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            alert(`You clicked on ${this.querySelector('p').innerText}`);
        });
    });
});
