<template>
  <div class="PokemonGame">
    <div class="mx-auto" style="max-width: 540px">
      <b-card
        no-body
        v-if="!loading"
        class="overflow-hidden mb-2"
        title="Catch 'Em All!"
      >
        <b-card-text>
          <b-row align-v="center" cols="1">
            <b-col>
              <b-img
                :src="pokemonToGuess.sprites.front_default"
                alt="pokemon icon"
                width="256"
                height="256"
              >
              </b-img>
            </b-col>
            <b-col>
              Catch 'em all! See if you can become the greatest pokemon trainer
              by catching all pokemons!
              <br />
              You are walking through the serene landscape of the Kanto region
              <br />
              SUDDENLY a wild pokemon appears! Write the name of the pokemon and
              it will be caught!
              <br />
              How many can you get?
            </b-col>
          </b-row>
        </b-card-text>
        <div>
          <b-progress class="mt-2" :max="151" show-value>
            <b-progress-bar
              :value="amountRight"
              variant="success"
            ></b-progress-bar>
            <b-progress-bar
              :value="amountWrong"
              variant="danger"
            ></b-progress-bar>
            <b-progress-bar
              :value="151 - amountRight - amountWrong"
              variant="warning"
            ></b-progress-bar>
          </b-progress>
        </div>
        <b-form-input
          placeholder="Write your guess here"
          v-model="guess"
        ></b-form-input>
        <b-button variant="primary" @click="guessName()">Guess!</b-button>
        <b-button variant="warning" @click="reset()">Reset</b-button>
        <b-button variant="outlined-secondary" @click="redirect()"
          >Back</b-button
        >
      </b-card>
    </div>
    <div>
      <b-modal id="modal-1" hide-footer title="Your guess was...">
        <p class="my-4">{{ message }}</p>
        <p class="my-4">The name of the pokemon is: {{ correctName }}</p>
        <b-button variant="primary" @click="guessAgain()">Next</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonGame",
  props: ["pokemons", "loading"],
  data() {
    return {
      pokemonToGuess: null,
      guess: "",
      message: "",
      numberList: [],
      amountRight: 0,
      amountWrong: 0,
      correctName: "",
    };
  },
  mounted() {
    this.reset();
  },
  methods: {
    generateRandomList() {
      const list = [];
      for (var i = 1; i <= 151; i++) {
        list.push(i);
      }
      this.numberList = list.sort(() => 0.5 - Math.random());
    },
    choosePokemonToGuess() {
      const id = this.numberList.pop();
      this.pokemonToGuess = this.pokemons.find((item) => item.id == id);
    },
    guessName() {
      if (this.pokemonToGuess.name == this.guess.toLowerCase()) {
        this.amountRight++;
        this.message = "CORRECT!";
      } else {
        this.amountWrong++;
        this.message = "WRONG!";
      }
      this.correctName = this.pokemonToGuess.name;
      this.$bvModal.show("modal-1");
      this.guess = "";
    },
    guessAgain() {
      this.$bvModal.hide("modal-1");
      this.choosePokemonToGuess();
    },
    reset() {
      this.pokemonToGuess = null;
      this.guess = "";
      this.numberList = [];
      this.amountRight = 0;
      this.amountWrong = 0;
      this.generateRandomList();
      this.choosePokemonToGuess();
    },
    redirect() {
      this.$router.push({ name: "PokemonList" });
    },
  },
};
</script>