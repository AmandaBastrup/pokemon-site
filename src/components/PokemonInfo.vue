<template>
  <div class="PokemonProfile">
    <div class="mx-auto" style="max-width: 540px">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              :src="pokemon.sprites.front_default"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body :title="pokemon.name">
              <b-card-text> Type: {{ pokemon.types }} </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        <b-button variant="outline-secondary" @click="directBack()"> Back </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "pokemonProfile",
  props: ["pokemon"],
  methods: {
    directBack() {
      this.$router.push({ name: "PokemonList" });
    },
  },
};
</script>
