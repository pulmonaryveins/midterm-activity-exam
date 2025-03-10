// Import the required modules
const express = require('express');
const app = express();

// Define a route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Vince Bryant Cabunilas' });
});

// Listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
