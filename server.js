'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 9000;

// App
const app = express();

app.use(express.static(__dirname));

// Always return the main index.html, so react-router render the route in the client
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(PORT);
console.log(`Running on :${PORT}`);
