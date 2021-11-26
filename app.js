const express = require('express');

// EXPRESS APP
const app = express();

// Listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.send('<p>Home Page</p>');
})