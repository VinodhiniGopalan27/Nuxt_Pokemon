
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/pokemons', async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60');
    const pokemons = response.data.results;
    res.json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
