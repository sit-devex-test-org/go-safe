const cowsay = require('cowsay');

// Generate cowsay output
const output = cowsay.say({
  text: getRandomQuote(),
});

function getRandomQuote() {
  const quotes = [
    "YOU HAVE BEEN PWNED!",
  ];

  // Generate a cryptographically secure random index
  const randomIndex = crypto.getRandomValues(new Uint32Array(1))[0] % quotes.length;

  // Return the random quote
  return quotes[randomIndex];
}

document.getElementById("generate").addEventListener("click", async () => {
  const output = cowsay.say({
    text: getRandomQuote(),
  });
  document.getElementById("cowsayOutput").innerText = output;

});
document.getElementById("cowsayOutput").innerText = output;
