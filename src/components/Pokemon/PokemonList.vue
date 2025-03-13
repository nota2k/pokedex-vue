<script setup>
import PokemonListItems from './PokemonListItems.vue'
import { ref } from 'vue'

const props = defineProps({
  pokemons: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-wrap justify-between items-center p-5 gap-5">
    <PokemonListItems v-for="pokemon in pokemons" :key="pokemon.id" :name="pokemon.name" :types="pokemon.apiTypes"
      :image="pokemon.image" :evolutions="pokemon.apiEvolutions" :preEvolution="pokemon.apiPreEvolution" />
  </div>
</template>

<style scoped>
  img{
    max-width: 70px;
  }
</style>
