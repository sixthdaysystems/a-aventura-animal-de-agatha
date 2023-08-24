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

//fonts
function setDefaultFont() {
    const h1Elements = document.querySelectorAll("h1");
    h1Elements.forEach(h1 => h1.classList.add("font-roboto"));
}

window.onload = setDefaultFont;

const fontSelect = document.getElementById("fontSelect");
const h1Elements = document.querySelectorAll("h1");

fontSelect.addEventListener("change", function () {
    const selectedFontClass = fontSelect.value;

    h1Elements.forEach(h1 => {
        h1.classList.remove("font-roboto", "font-dancing-script", "font-quicksand", "font-amatic-sc", "font-fredoka");
        h1.classList.add(selectedFontClass);
    });
});

//audios
const audioElements = document.querySelectorAll('audio');

audioElements.forEach((audio, index) => {
    const player = audio.parentElement;

    player.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }

        audioElements.forEach((otherAudio, otherIndex) => {
            if (otherIndex !== index && !otherAudio.paused) {
                otherAudio.pause();
            }
        });
    });
});