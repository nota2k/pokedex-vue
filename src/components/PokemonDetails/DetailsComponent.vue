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
     <div class="flex gap-20 justify-center">
          <div class="column">
               <div class="img-wrapper">
                    <img :src="props.pokemon.image" alt="props.pokemon.name" />
               </div>
          </div>

          <div class="column">
               <h1>{{ props.pokemon.name }}</h1>
               <div class="stats">
                    <div class="flex flex-col justify-center items-center stat-block">
                         <p>HP:</p>
                         <p class="circle">{{ props.pokemon.stats.HP }}</p>
                    </div>
                    <div class="flex flex-col justify-center items-center stat-block">
                         <p>Attaque:</p>
                         <p class="circle">{{ props.pokemon.stats.attack }}</p>
                    </div>
                    <div class="flex flex-col justify-center items-center stat-block">
                         <p>Défense:</p>
                         <p class="circle">{{ props.pokemon.stats.defense }}</p>
                    </div>
                    <div class="flex flex-col justify-center items-center stat-block">
                         <p>Attaque Spéciale:</p>
                         <p class="circle">{{ props.pokemon.stats.special_attack }}</p>
                    </div>
                    <div class="flex flex-col justify-center items-center stat-block">
                         <p>Défense Spéciale:</p>
                         <p class="circle">{{ props.pokemon.stats.special_defense }}</p>
                    </div>
                    <div class="flex flex-col justify-center items-center stat-block">
                         <p>Vitesse:</p>
                         <p class="circle">{{ props.pokemon.stats.speed }}</p>
                    </div>
               </div>
          </div>
     </div>
</template>

<style scoped>
h1 {
     font-size: 4em;
     font-weight: 600;
     text-transform: uppercase;
     color: var(--color-red-500);
}

.circle {
     padding: 10px;
     display: block;
     width: 50px;
     background-color: var(--color-red-500);
     color: #fff;
     border-radius: 50%;
     height: 50px;
     display: flex;
     justify-content: center;
     align-items: center;
     font-weight: 600;
     font-size: 25px;
}

.column {
     /* width: 50%; */
     display: flex;
     align-items: center;
     gap: 20px;
     flex-direction: column;
     justify-content: center;
}

.stats {
     padding: 20px;
     border: 2px solid var(--color-red-500);
     border-radius: 10px;
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     gap: 20px;
}
</style>
