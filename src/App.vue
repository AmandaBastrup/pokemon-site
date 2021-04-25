<template>
  <div id="app">
    <pokemon-header />
    <router-view :pokemons="pokemons" :loading="loading" />
  </div>
</template>

<script>
import PokemonHeader from "./components/PokemonHeader.vue";
import axios from "axios";

export default {
  components: {
    PokemonHeader,
  },
  name: "App",
  data() {
    return {
      pokemons: [],
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    this.pokemons = await this.fetchPokemons();
    this.loading = false;
  },
  methods: {
    async fetchPokemons() {
      let pokemons = [];
      let result;

      for (var i = 1; i < 152; i++) {
        result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        pokemons.push(result.data);
      }
      return pokemons;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
