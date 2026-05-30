// Arrays for dynamic content
const quotes = [
    "Make it simple, but significant.",
    "Complexity is your enemy. Any fool can make something complicated.",
    "Simplicity is the ultimate sophistication.",
    "Action is the foundational key to all success.",
    "Code is like humor. When you have to explain it, it’s bad."
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
