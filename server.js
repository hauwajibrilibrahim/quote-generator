const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// Load the quotes from the JSON file
const quotes = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));

// API route to get a random quote
app.get('/random-quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  res.json(randomQuote);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
