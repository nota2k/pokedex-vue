<script setup>
import { ref } from 'vue'
const emit = defineEmits(['fetch-pokemon'])

function fetchPokemon() {
  emit('fetch-pokemon')
}
</script>

<template>
  <div class="filter-wrapper p-5 text-lg font-semibold text-left rtl:text-right flex gap-5 flex-wrap">
    <button @click="fetchPokemon">Fetch Pokemon</button>
    <input type="text" placeholder="Rechercher" class="input max-w-[250px]" />
    <select  @change="" class="type-select">
      <option selected>Tous</option>
      <option value="poison">Poison</option>
      <option value="plante">Plante</option>
      <option value="eau">Eau</option>
      <option value="feu">Feu</option>
    </select>
  </div>
</template>

<style scoped>
.filter-wrapper>*:not(button) {
  max-width: 250px;
  width: 100%;
}

img {
  max-width: 70px;
}

input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid rgba(38, 121, 181, 0.3);
  font-weight: 400;
  border-radius: 5px;
}

.type-select {
  padding: 0.5rem;
  border: 1px solid rgba(38, 121, 181, 0.3);
  font-weight: 400;
  border-radius: 5px;
}
</style>