document.addEventListener('DOMContentLoaded', function() {
    const constellationData = [
        { name: 'Orion', description: 'Orion is a prominent constellation located on the celestial equator and visible throughout the world. It is named after Orion, a hunter in Greek mythology.' },
        { name: 'Ursa Major', description: 'Ursa Major is a constellation in the northern sky, whose associated mythology likely dates back into prehistory. Its Latin name means "greater bear," referring to its larger size.' },
        { name: 'Cassiopeia', description: 'Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivaled beauty.' },
        { name: 'Scorpius', description: 'Scorpius is one of the constellations of the zodiac and is located in the southern celestial hemisphere. Its name is Latin for scorpion.' },
        { name: 'Leo', description: 'Leo is one of the constellations of the zodiac, lying between Cancer the crab to the west and Virgo the maiden to the east. Its name is Latin for lion.' }
        // Add more constellations as needed
    ];

    const zodiacData = [
        { sign: 'Aries', description: 'Aries is the first sign of the zodiac, symbolized by the ram. It is known for its energetic, assertive, and pioneering spirit.' },
        { sign: 'Taurus', description: 'Taurus is the second sign of the zodiac, symbolized by the bull. It is known for its reliability, practicality, and determination.' },
        { sign: 'Gemini', description: 'Gemini is the third sign of the zodiac, symbolized by the twins. It is known for its adaptability, curiosity, and communication skills.' },
        { sign: 'Cancer', description: 'Cancer is the fourth sign of the zodiac, symbolized by the crab. It is known for its emotional depth, intuition, and nurturing nature.' },
        { sign: 'Leo', description: 'Leo is the fifth sign of the zodiac, symbolized by the lion. It is known for its confidence, creativity, and leadership qualities.' },
        { sign: 'Virgo', description: 'Virgo is the sixth sign of the zodiac, symbolized by the maiden. It is known for its analytical mind, attention to detail, and practical approach.' },
        { sign: 'Libra', description: 'Libra is the seventh sign of the zodiac, symbolized by the scales. It is known for its sense of balance, harmony, and justice.' },
        { sign: 'Scorpio', description: 'Scorpio is the eighth sign of the zodiac, symbolized by the scorpion. It is known for its intensity, passion, and transformative nature.' },
        { sign: 'Sagittarius', description: 'Sagittarius is the ninth sign of the zodiac, symbolized by the archer. It is known for its adventurous spirit, optimism, and love for freedom.' },
        { sign: 'Capricorn', description: 'Capricorn is the tenth sign of the zodiac, symbolized by the goat. It is known for its discipline, ambition, and strategic approach.' },
        { sign: 'Aquarius', description: 'Aquarius is the eleventh sign of the zodiac, symbolized by the water bearer. It is known for its innovative thinking, independence, and humanitarian efforts.' },
        { sign: 'Pisces', description: 'Pisces is the twelfth sign of the zodiac, symbolized by the fish. It is known for its empathy, artistic nature, and spiritual depth.' }
        // Add more zodiac signs as needed
    ];

    const angelNumbersData = [
        { number: '111', meaning: 'Angel Number 111 means alignment and manifestation. It signifies that your thoughts are becoming reality.' },
        { number: '222', meaning: 'Angel Number 222 means balance and harmony. It suggests that you are on the right path and should keep the faith.' },
        { number: '333', meaning: 'Angel Number 333 means support and protection. It indicates that the ascended masters are with you, offering guidance.' },
        { number: '444', meaning: 'Angel Number 444 means stability and grounding. It reassures you that you are surrounded by positive energies and support.' },
        { number: '555', meaning: 'Angel Number 555 means change and transformation. It encourages you to embrace the upcoming changes and trust the process.' },
        { number: '666', meaning: 'Angel Number 666 means reflection and rebalancing. It advises you to re-evaluate your thoughts and actions to restore balance.' },
        { number: '777', meaning: 'Angel Number 777 means divine intervention. It signifies that you are on the right path and your efforts are being recognized.' },
        { number: '888', meaning: 'Angel Number 888 means abundance and prosperity. It indicates that financial and material blessings are on their way.' },
        { number: '999', meaning: 'Angel Number 999 means completion and closure. It suggests that you are about to conclude a significant phase in your life.' },
        { number: '000', meaning: 'Angel Number 000 means new beginnings. It represents infinite potential and the start of a new journey.' }
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
