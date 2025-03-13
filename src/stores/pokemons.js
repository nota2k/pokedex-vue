import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const API_URL = 'https://pokebuildapi.fr/api/v1';


export const usePokemonStore = defineStore('pokemons', () => {
  const pokemons = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const selectedPokemon = ref(null);

  const fetchPokemon = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch(`${API_URL}/pokemon`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      pokemons.value = data;
    } catch (err) {
      console.error('Error fetching data:', err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  // Récupérer un seul Pokémon par son ID
  const fetchPokemonById = async (id) => {
    loading.value = true;
    error.value = null;
    selectedPokemon.value = null;

    try {
      const response = await fetch(`${API_URL}/pokemon/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      selectedPokemon.value = data;
    } catch (err) {
      console.error(`Error fetching pokemon with id ${id}:`, err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  // Getter pour obtenir un Pokémon par ID (utilise les données déjà chargées)
  const getPokemonById = (id) => {
    return pokemons.value.find(pokemon => pokemon.id === parseInt(id));
  };

  return {
    pokemons,
    selectedPokemon,
    loading,
    error,
    fetchPokemon,
    fetchPokemonById,
    getPokemonById
  }
})

