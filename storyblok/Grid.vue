<template>
  <div
    v-editable="blok" class="grid md:grid-cols-3 my-6 place-items-center bg-[#000000] py-5 " >

    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<style>

</style>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Grid extends SbComponent{
  columns: Array<SbComponent>;
}

defineProps<{
  blok: Grid;
}>();
</script>
