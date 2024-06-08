<template>
  <div
      v-editable="blok" class="skillcontainer pb-5 flex justify-center items-center flex-wrap" >
    <StoryblokComponent
        v-for="blok in blok.skills"
        :key="blok._uid"
        :blok="blok"
    />
  </div>
</template>

<style>
.skillcontainer{
  margin-top: -24px;
}
</style>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Skillcontainer extends SbComponent{
  skills: Array<SbComponent>;
}

defineProps<{
  blok: Skillcontainer;
}>();
</script>