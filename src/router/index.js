import Vue from 'vue'
import Router from 'vue-router'
import PokemonList from "/src/components/PokemonList.vue";
import PokemonInfo from "/src/components/PokemonInfo.vue";
import PokemonGame from "/src/components/PokemonGame.vue";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "PokemonList",
      component: PokemonList,
    },
    {
      path: "/profile/:id",
      name: "pokemonProfile",
      component: PokemonInfo,
      props: true
    },
    {
      path: "/game",
      name: "PokemonGame",
      component: PokemonGame,
    },
  ]
})