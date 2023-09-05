export const state = () => ({
  pokemons: [],
});

export const mutations = {
  setPokemons(state, pokemons) {
    state.pokemons = pokemons;
  },
};

export const actions = {
  async fetchPokemons({ commit }) {
    try {
      const response = await this.$axios.get('https://pokeapi.co/api/v2/pokemon?limit=60');
      const pokemons = response.data.results;
      commit('setPokemons', pokemons);
    } catch (error) {
      console.error(error);
    }
  },
};
