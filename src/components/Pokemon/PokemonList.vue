<script setup>
import PokemonListItems from './PokemonListItems.vue'
import { usePokemonStore } from '@/stores/pokemons';
import { storeToRefs } from 'pinia';

// Instancier le store
const store = usePokemonStore();

// Utiliser storeToRefs pour conserver la réactivité des propriétés du store
const { pokemons, loading, error } = storeToRefs(store);

</script>

<template>
  <div v-if="loading">Chargement en cours...</div>
  <div v-else-if="error">Erreur lors du chargement des Pokémons: {{ error.message }}</div>
  <div v-else class="flex flex-wrap justify-between items-center p-5 gap-5">
    <PokemonListItems v-for="pokemon in pokemons" :key="pokemon.id" :id="pokemon.id" :name="pokemon.name"
      :types="pokemon.apiTypes" :image="pokemon.image" :evolutions="pokemon.apiEvolutions"
      :preEvolution="pokemon.apiPreEvolution" />
  </div>
</template>

<style scoped>
img {
  max-width: 70px;
}
</style>