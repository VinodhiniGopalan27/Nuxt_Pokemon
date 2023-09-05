<template>
  <div>
    <h1 class="text-center">Pokemon List</h1>
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search Pokemon by Name"
        @input="filterPokemonList"
      />
    </div>
    <div class="pokemon-list">
      <router-link
        v-for="pokemon in filteredPokemonList"
        :key="pokemon.id"
        :to="{ name: 'ProfilePokemon', query: { id: pokemon.id, largeImage: pokemon.largeImage } }"
        class="pokemon-card"
      >
        <div class="card">
          <img :src="pokemon.thumbnail" :alt="pokemon.name" />
          <div class="card-title text-center">{{ pokemon.name }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style>
.text-center {
  text-align: center;
}

.search-container {
  margin-bottom: 20px;
  text-align: center;
}

input[type="text"] {
  width: 80%;
  max-width: 400px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #FFFFFF; 
}

.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  margin: 0 auto;
  max-width: 1200px; 
}

.pokemon-card {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 10px;
  text-decoration: none;
  }

.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  padding: 10px;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card-title {
  margin-top: 10px;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemonList: [],
      searchQuery: '',  
    };
  },
  computed: {
    filteredPokemonList() {
      return this.pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60');
        const pokemonList = response.data.results;

        // Fetch additional details including 'id' for each Pokémon
        const detailedPokemonList = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            return {
              id: detailsResponse.data.id, // Include 'id'
              name: detailsResponse.data.name,
              thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${detailsResponse.data.id}.png`,         
            };
          })
        );

        // Update the component's data with the fetched data
        this.pokemonList = detailedPokemonList;
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    },
    filterPokemonList() {
      
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>
