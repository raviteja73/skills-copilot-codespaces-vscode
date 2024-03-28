// create web server with express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// create a variable to store the comments
let comments = [];
// create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});
