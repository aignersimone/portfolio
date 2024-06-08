<template>
  <div class="flex justify-center mx-6 my-6">
    <div class="grid grid-rows-auto">
      <div class="italic text-center text-lg">{{ blok.zitat }}</div>
      <div class="text-center">{{ blok.author }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Zitat extends SbComponent{
  zitat: string;
  author: string;
}

defineProps<{ blok: Zitat }>();
</script>

<style scoped>
.grid-rows-auto {
  display: grid;
  grid-template-rows: auto auto;
}
</style>
