const cowsay = require('cowsay');

// Generate cowsay output
const output = cowsay.say({
  text: getRandomQuote(),
});

function getRandomQuote() {
  const quotes = [
    "Security is not a product, but a process.",
    "The problem is not the user’s lack of knowledge, but the system’s lack of guidance.",
    "The only secure system is one that is unplugged, turned off, and locked in a room.",
    "If you think technology can solve your security problems, then you don’t understand the problems and you don’t understand the technology.",
    "Data is a precious thing and will last longer than the systems themselves.",
    "Passwords are like toothbrushes: choose a good one, don’t share it, and change it regularly.",
    "Passwords are cool."
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
