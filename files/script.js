document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.getElementById("animatedText");

    // Split the text into words
    const words = animatedText.textContent.split(' ');

    // Clear the original text content
    animatedText.textContent = '';

    // Iterate through each word and create a span element for each
    words.forEach(function (word, index) {
        const wordSpan = document.createElement('span');
        wordSpan.textContent = word;

        // Add a non-breaking space after each word
        if (index < words.length - 1) {
            wordSpan.innerHTML += '&nbsp;';
        }

        wordSpan.classList.add('word');

        // Add a small delay to each word to create a staggered effect
        wordSpan.style.animationDelay = `${index * 0.1}s`;

        animatedText.appendChild(wordSpan);
    });
});
