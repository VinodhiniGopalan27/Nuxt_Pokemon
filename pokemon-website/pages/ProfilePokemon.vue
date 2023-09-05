<template>
  <div>
    <h2>Pokemon Profile</h2>
    <table class="pokemon-table">
      <tr>
        <td colspan="2">
          <img :src="largeImage" alt="Large Image" class="pokemon-image" />
        </td>
      </tr>
      <tr>
        <td>ID</td>
        <td>{{ $route.query.id }}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{ name }}</td>
      </tr>
      <tr>
        <td>Height</td>
        <td>{{ height }}</td>
      </tr>
      <tr>
        <td>Weight</td>
        <td>{{ weight }}</td>
      </tr>
      <tr>
        <td>Abilities</td>
        <td>{{ formattedAbilities }}</td>
      </tr>
    </table>
  </div>
</template>

<style>
.pokemon-table {
  border-collapse: collapse;
  width: 100%;
  max-width: 400px; 
  margin: 0 auto;
}

.pokemon-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center; 
}

.pokemon-image {
  display: block;
  max-width: 70%;
  height: auto;
  margin: 10px auto; 
}
</style>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      height: '',
      weight: '',
      abilities: [],
      largeImage: '', 
    };
  },
  async created() {
    const pokemonId = this.$route.query.id;
    console.log('Pokemon ID:', pokemonId);

    try {
      // Fetch Pokémon data
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      console.log('API Response:', response.data);

      // Access the data properties from the response object
      this.name = response.data.name;
      this.height = response.data.height;
      this.weight = response.data.weight;
      this.abilities = response.data.abilities;

      // Fetch the large image
      const largeImageResponse = await axios.get(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`);
      this.largeImage = largeImageResponse.config.url; // Store the URL for the large image
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  },
  computed: {
    formattedAbilities() {
      // Extract the ability names 
      const abilityNames = this.abilities.map(
        (abilityData) => abilityData.ability.name.charAt(0).toUpperCase() + abilityData.ability.name.slice(1)
      );
      return abilityNames.join(', ');
    },
  },
};
</script>


