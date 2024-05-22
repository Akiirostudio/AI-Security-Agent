document.addEventListener('DOMContentLoaded', function() {
    const constellationData = [
        { name: 'Orion', description: 'A prominent constellation located on the celestial equator and visible throughout the world.' },
        { name: 'Ursa Major', description: 'A constellation in the northern sky, whose associated mythology likely dates back into prehistory.' },
        // Add more constellations as needed
    ];

    const zodiacData = [
        { sign: 'Aries', description: 'Aries is the first sign of the zodiac, symbolized by the ram.' },
        { sign: 'Taurus', description: 'Taurus is the second sign of the zodiac, symbolized by the bull.' },
        // Add more zodiac signs as needed
    ];

    const angelNumbersData = [
        { number: '111', meaning: 'Angel Number 111 means alignment and manifestation.' },
        { number: '222', meaning: 'Angel Number 222 means balance and harmony.' },
        // Add more angel numbers as needed
    ];

    function displayConstellations() {
        const container = document.getElementById('constellation-container');
        constellationData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p>`;
            container.appendChild(card);
        });
    }

    function displayZodiacSigns() {
        const container = document.getElementById('zodiac-container');
        zodiacData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${item.sign}</h3><p>${item.description}</p>`;
            container.appendChild(card);
        });
    }

    function displayAngelNumbers() {
        const container = document.getElementById('angel-number-container');
        angelNumbersData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<h3>${item.number}</h3><p>${item.meaning}</p>`;
            container.appendChild(card);
        });
    }

    document.getElementById('feeling-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const feeling = document.getElementById('user-feeling').value;

        // Placeholder for AI API interaction
        const response = `You are feeling ${feeling}. Here is your esoteric guidance: Trust the universe and stay positive.`;

        const responseContainer = document.getElementById('response-container');
        responseContainer.innerHTML = `<p>${response}</p>`;
    });

    displayConstellations();
    displayZodiacSigns();
    displayAngelNumbers();
});
