<template>
  <div
      v-editable="blok" class="projectcontainer flex justify-center items-center flex-wrap" >
    <StoryblokComponent
        v-for="blok in blok.projects"
        :key="blok._uid"
        :blok="blok"
    />
  </div>
</template>

<style scoped>
.projectcontainer{
  margin-top: -24px;
}
</style>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Projectcontainer extends SbComponent{
  projects: Array<SbComponent>;
}

defineProps<{
  blok: Projectcontainer;
}>();
</script>