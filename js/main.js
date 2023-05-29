const textElement = ['content creator', 'youtuber', 'vlogger', 'storyteller'];
let count = 0;
let textIndex = 0;
let currentText = '';
let words = '';

(function typingEffect() {
    currentText = textElement[count];

    words = currentText.slice(0, ++textIndex);
    document.querySelector('.typing-effect').textContent = words;

    if (words.length === currentText.length) {
        if (count === textElement.length - 1) {
            // Animation has reached the end of the textElement array
            return;
        }
        count++;
        textIndex = 0;
        setTimeout(typingEffect, 1000); // Wait for 1 second before moving to the next element
    } else {
        setTimeout(typingEffect, 350);
    }
})();

function toggleZoom() {
    var layout = document.querySelector("body");

    layout.classList.toggle("zoomed-layout");
}