<template>
  <div class="p-4">
    <button :disabled="!previousUrl" @click="changePage(previousUrl)" class="btn btn-light">Previous</button>
    <button :disabled="!nextUrl" @click="changePage(nextUrl)" class="btn btn-light">Next</button>
  </div>

  <div v-for="(p, index) in pokemon" :key="index">
    <div class="m-3">
      <h3>
        {{ p.name }}

      </h3>
    </div>


  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { pokemonService } from '../services/PokemonService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

export default {
  setup() {
    onMounted(() => getPokemon())
    async function getPokemon() {
      try {
        await pokemonService.getPokemon()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      pokemon: computed(() => AppState.pokemon),
      previousUrl: computed(() => AppState.previousPageUrl),
      nextUrl: computed(() => AppState.nextPageUrl),
      async changePage(url) {
        try {
          await pokemonService.changePage(url)
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
