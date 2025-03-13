<script setup>
import { ref } from 'vue'
const props = defineProps({
  name: String,
  types: Array,
  image: String,
  preEvolution: [Object, String],  // Accepte Object ou String
  evolutions: [Object, String]      // Accepte Object ou String
})
</script>

<template>
  <div v-if="!props.name && !props.types && !props.image" class="card-empty">
    <p class="px-6 py-4 text-center">
      Aucun pokémon
    </p>
  </div>
  <div v-else class="card">
    <div class="title-wrapper">
      <h1 class="text-center">{{ props.name }}</h1>
    </div>
    <div class="pokemon-img">
      <img :src="props.image" :alt="`${props.name} Photo`" />
    </div>
    <div class="info-wrapper">
      <h2>Types&nbsp;:</h2>
      <p>{{props.types ? props.types.map(type => type.name).join(', ') : 'Aucun'}}</p>
      <h2>Pré-Evolution&nbsp;: </h2>
      <span>{{ props.preEvolution && props.preEvolution.name ? props.preEvolution.name : 'Aucune' }}</span>
      <h2>Evolutions&nbsp;: </h2>
      <span v-if="props.evolutions && props.evolutions.length > 0">
        <span v-for="evolution in props.evolutions">
          {{ evolution.name ? evolution.name : 'Aucune' }}
        </span>
      </span>
      <span v-else>
        Aucune
      </span>
    </div>
  </div>
</template>

<style scoped>
.title-wrapper {
  margin: 10px auto 20px auto;
}

h1 {
  font-size: 1.5em;
  font-weight: 600;
  font-weight: 500;
}

h2 {
  font-weight: 600;
  color: rgb(66, 124, 107);
}

.info-wrapper {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap:5px;
}

.pokemon-img {
  height: 130px;
}

.pokemon-img img {
  height: 100%;
  margin: 0 auto;
}
</style>
