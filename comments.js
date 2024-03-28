// Create web server with express
// Create a route for comments

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.send('This is a route for comments');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Run the server with node comments.js
// Open the browser and go to http://localhost:3000/comments
// You should see the message "This is a route for comments"
