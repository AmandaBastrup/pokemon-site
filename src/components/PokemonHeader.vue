<template>
  <div class="header mb-5">
    <b-row cols="1">
      <b-col>
        <img
          src="../assets/986614ee26f2c1cf8fd53d003b9534a4.png"
          fluid
          alt="Pokemon header"
        />
      </b-col>
      <b-col>
        <b-button variant="outline-primary" @click="redirect()">
          <img
            src="../assets/5b2e6a104721860c34b0e518a092ba26.png"
            fluid
            alt="catch 'em all"
          />
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
  name: "PokemonHeader",
  methods: {
    redirect() {
      this.$router.push({ name: "PokemonGame" });
    },
  },
};
</script>
