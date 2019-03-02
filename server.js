'use strict';

// We're using the express library we pulled in using npm:
const express = require('express');

// Constants (note this will get weird later)
const PORT = 5000;

// We start an express app:
const app = express();

// At the root, create a `send` element for the `res`ponse.  There is no 
// option to pass in a `req`uest at this time.

app.get('/', function (req, res) {
  res.send('<h1>Hello world</h1>\nAnd a special hello from Shannon!');
});

// Then listen to the port to see if there are any `get` calls to the root (with the response defined above):
app.listen(process.env.PORT || PORT);
console.log('Running on http://localhost:' + PORT);