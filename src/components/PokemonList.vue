<template>
  <div>
    <b-form-group
      label="Filter on types"
      label-for="types-filter"
      label-cols-lg="2"
      class="mx-auto"
      style="width: 60%"
    >
      <b-form-select v-model="filter" :options="types">
        <template #first>
          <option value="">-- None --</option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-table
      class="mx-auto"
      style="width: 60%"
      sticky-header="600px"
      :filter="filter"
      :filter-function="filterTable"
      :fields="fields"
      :tbody-tr-class="rowClass"
      :items="tablePokemons"
      :busy="loading"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      @row-clicked="myRowClickHandler"
    >
      <!-- A loading spinner for when data is being fetched -->
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #cell(icon)="data">
        <b-img
          :src="data.item.sprites.front_default"
          fluid
          alt="pokemon icon"
        ></b-img>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: "PokemonList",
  props: ["pokemons", "loading"],
  data() {
    let data = {
      sortBy: "nr",
      sortDesc: false,
      fields: [
        { key: "icon", sortable: false },
        { key: "nr", sortable: true },
        { key: "name", sortable: true },
        { key: "types", sortable: true },
      ],
      types: [
        "grass",
        "water",
        "fire",
        "normal",
        "bug",
        "electric",
        "poison",
        "fairy",
        "ground",
        "fighting",
        "ice",
        "psychic",
        "rock",
        "dragon",
        "ghost",
      ],
      filter: null,
    };
    return data;
  },
  computed: {
    tablePokemons() {
      return this.pokemons.map((pokemon) => {
        return {
          nr: pokemon.id,
          name: this.capitalizeString(pokemon.name),
          types: this.getTypeString(pokemon.types),
          sprites: pokemon.sprites,
        };
      });
    },
  },
  methods: {
    myRowClickHandler(record) {
      this.$router.push({
        name: "pokemonProfile",
        params: { id: record.nr, pokemon: record },
      });
    },

    //Adds a class name to row, bases on the pokemon type
    rowClass(item, type) {
      if (!item || type !== "row") return;

      //Getting first type to match color
      let firstType = item.types.split(",", 1);

      //dictonary for pokemon types key = type, value = the class to be added to row
      return {
        grass: "table-grass table-row",
        water: "table-water table-row",
        fire: "table-fire table-row",
        normal: "table-normal table-row",
        bug: "table-bug table-row",
        electric: "table-electric table-row",
        poison: "table-poison table-row",
        fairy: "table-fairy table-row",
        ground: "table-ground table-row",
        fighting: "table-fighting table-row",
        ice: "table-poison table-row",
        psychic: "table-psychic table-row",
        rock: "table-rock table-row",
        dragon: "table-dragon table-row",
        ghost: "table-ghost table-row",
      }[firstType];
    },

    //transforming the multiple types a pokemon is to one concatinated string seperated by comma
    getTypeString(types) {
      const allTypes = types.map((type) => {
        return type.type.name;
      });
      return allTypes.join(", ");
    },

    //filters the table based on the value filter has.
    filterTable(item, filter) {
      let types = item.types.split(", ");
      if (types.includes(filter)) {
        return true;
      } else {
        return false;
      }
    },
    capitalizeString(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
  },
};
</script>

<style>
.table-grass {
  background-color: #a7db8d;
}
.table-row:hover {
  opacity: 0.75;
}
.table-fire {
  background-color: #f5ac78;
}
.table-water {
  background-color: #9db7f5;
}
.table-electric {
  background-color: #fae078;
}
.table-poison {
  background-color: #c183c1;
}
.table-bug {
  background-color: #c6d16e;
}
.table-fairy {
  background-color: #f4bdc9;
}
.table-normal {
  background-color: #c6c6a7;
}
.table-ground {
  background-color: #ebd69d;
}
.table-rock {
  background-color: #d1c17d;
}
.table-dragon {
  background-color: #a27dfa;
}
.table-ice {
  background-color: #bce6e6;
}
.table-fighting {
  background-color: #d67873;
}
.table-psychic {
  background-color: #fa92b2;
}
.table-ghost {
  background-color: #a292bc;
}
</style>