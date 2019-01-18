'use strict';

const express = require('express');
const path = require('path');

// Constants
//const PORT = 8080;
const PORT = process.env.PORT || 9000;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static(path.resolve(__dirname, '.', '')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '.', '', 'index.html'));
});

//app.listen(PORT);
//app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);
//console.log(`Running on ${PORT}`);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
