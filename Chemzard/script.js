const elements = [
    { symbol: 'H', name: 'Hydrogen' },
    { symbol: 'He', name: 'Helium' },
    { symbol: 'Li', name: 'Lithium' },
    { symbol: 'Be', name: 'Beryllium' },
    { symbol: 'B', name: 'Boron' },
    { symbol: 'C', name: 'Carbon' },
    { symbol: 'N', name: 'Nitrogen' },
    { symbol: 'O', name: 'Oxygen' },
    { symbol: 'F', name: 'Fluorine' },
    { symbol: 'Ne', name: 'Neon' },
    // Add more elements as needed
];

let score = 0;
let attempts = 0;
let wrongAttempts = 0;
let trials = 0;

const scoreElement = document.getElementById('score');
const attemptsElement = document.getElementById('attempts');
const wrongAttemptsElement = document.getElementById('wrongAttempts');
const trialsElement = document.getElementById('trials');
const selectedList = document.getElementById('selectedList');

function updateScoreboard() {
    scoreElement.textContent = score;
    attemptsElement.textContent = attempts;
    wrongAttemptsElement.textContent = wrongAttempts;
    trialsElement.textContent = trials;
}

function selectElement(element) {
    attempts++;
    if (!selectedList.innerHTML.includes(element.symbol)) {
        score++;
        const listItem = document.createElement('li');
        listItem.textContent = ${element.symbol} - ${element.name};
        selectedList.appendChild(listItem);
    } else {
        wrongAttempts++;
    }
    updateScoreboard();
}

function createElementButtons() {
    const elementsContainer = document.getElementById('elements');
    elements.forEach(element => {
        const button = document.createElement('div');
        button.className = 'element';
        button.textContent = element.symbol;
        button.onclick = () => selectElement(element);
        elementsContainer.appendChild(button);
    });
}

createElementButtons();
updateScoreboard();