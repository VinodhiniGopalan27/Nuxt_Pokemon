
import axios from 'axios';

const baseUrl = 'http://localhost:3000'; // Replace with your server's URL

export const getPokemons = async () => {
  try {
    const response = await axios.get(`${baseUrl}/api/pokemons`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    throw error;
  }
};
