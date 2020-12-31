const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const { default: SlippiGame } = require('@slippi/slippi-js');
const game = new SlippiGame("./test.slp");

const settings = game.getSettings();
const metadeta = game.getMetadata();
const stats = game.getStats();

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/settings', (req, res) => {
  res.send({ express: settings });
});

app.get('/game', (req, res) => {
  res.send({ express: game });
});

app.get('/metadata', (req, res) => {
  res.send({ express: metadata });
});

app.get('/stats', (req, res) => {
  res.send({ express: stats });
});
