const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000; // Change this to your desired port

app.use(express.json());
app.use(cors({
  origin: 'https://team-hashing.github.io',
  methods: ['GET', 'POST']
}));

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
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
