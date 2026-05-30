// Arrays for dynamic content
const quotes = [
    "I AM SIGMA",
    "Rome was not built in a day",
    "Those",
    "🗣️💯💯🙏🙏",
    "The only impossible journey is the one you never begin"
];

const colors = ["#f0f2f5", "#e3faf2", "#fff3e6", "#ede7f6", "#e8f0fe"];

// Target the HTML elements
const button = document.getElementById("actionBtn");
const quoteText = document.getElementById("quote");
const body = document.body;

// Check if the button actually exists on the current page before running code
if (button) {
    button.addEventListener("click", () => {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        quoteText.textContent = `"${randomQuote}"`;
        body.style.backgroundColor = randomColor;
    });
}
