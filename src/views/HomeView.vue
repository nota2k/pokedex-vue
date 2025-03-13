<script setup>
import PokemonList from "../components/Pokemon/PokemonList.vue";
import FilterPokemon from "../components/FilterPokemon.vue";
import { usePokemonStore } from '@/stores/pokemons';
import { ref, computed } from "vue";

const pokemons = usePokemonStore();

</script>

<template>
  <div class="max-w-[90%]  m-auto">
    <h1>Pokedex</h1>
    <FilterPokemon />
    <PokemonList :pokemons="pokemons" />
  </div>

</template>

<style scoped>
h1 {
  font-size: 8em;
  font-family: "Jacquard 12", system-ui;
  font-weight: 400;
  text-align: center;
  color: var(--color-red-500)
}
</style>
