const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Change this to your desired port

app.use(express.json());

// Define the route for /generateDemo
app.post('/generateDemo', async (req, res) => {
  try {
    const inputText = req.body.text;

    // Make a request to the external server
    const response = await axios.post('http://35.224.98.88:3000/generateDemo', {
      text: inputText,
    });

    // Return whatever the external server responds
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
