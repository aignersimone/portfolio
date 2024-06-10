<template>
  <div class="mx-6 bg">
    <div v-editable="blok" class="grid my-4 lifecontainer">
      <StoryblokComponent
          v-for="blok in blok.lifesteps"
          :key="blok._uid"
          :blok="blok"
      ></StoryblokComponent>
    </div>
  </div>
</template>

<style scoped>
.lifecontainer{
  margin-top: -8px;
}
</style>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Lifecontainer extends SbComponent{
  lifesteps: Array<SbComponent>;
}

defineProps<{
  blok: Lifecontainer;
}>();
</script>