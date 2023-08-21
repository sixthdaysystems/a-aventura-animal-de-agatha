//toggle colors
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
    }
});

//go to element
const sections = document.querySelectorAll('section');
const upButtons = document.querySelectorAll('.up-button');
const downButtons = document.querySelectorAll('.down-button');

upButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index > 0) {
            sections[index - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

downButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (sections[index + 1]) {
            sections[index + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});