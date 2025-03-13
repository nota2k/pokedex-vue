<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
     pokemon: {
          type: Object,
          required: true
     }
});

</script>

<template>
     <main>
          <div class="column">
               <div class="img-wrapper">
                    <img :src="props.pokemon.image" alt="props.pokemon.name" />
               </div>
          </div>

          <div class="column">
               <h1>{{ props.pokemon.name }}</h1>
               <div class="stats">
                    <p>HP: {{ props.pokemon.stats.HP }}</p>
                    <p>Attaque: {{ props.pokemon.stats.attack }}</p>
                    <p>Défense: {{ props.pokemon.stats.defense }}</p>
                    <p>Attaque Spéciale: {{ props.pokemon.stats.special_attack }}</p>
                    <p>Défense Spéciale: {{ props.pokemon.stats.special_defense }}</p>
                    <p>Vitesse: {{ props.pokemon.stats.speed }}</p>
               </div>
          </div>
     </main>
</template>

<style scoped></style>
