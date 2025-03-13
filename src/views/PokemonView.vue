<script setup>
import DetailsComponent from '@/components/PokemonDetails/DetailsComponent.vue'
import { usePokemonStore } from '@/stores/pokemons';
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const route = useRoute()
const store = usePokemonStore();

const { selectedPokemon, loading, error } = storeToRefs(store);
const pokemonId = ref(route.params.id);

const loadPokemonData = async () => {
  await store.fetchPokemonById(pokemonId.value);
};

onMounted(() => {
  loadPokemonData();
});

watch(() => route.params.id, (newId) => {
  pokemonId.value = newId;
  loadPokemonData();
});

</script>

<template>
  <div class="max-w-[80%]  m-auto">
    <h1>Pokedex</h1>
    <div v-if="loading">Chargement en cours...</div>
    <div v-else-if="error">Erreur: {{ error.message }}</div>
    <div v-else-if="selectedPokemon">
      <DetailsComponent :pokemon="selectedPokemon" />
    </div>
    <div v-else>Pokémon non trouvé</div>
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
