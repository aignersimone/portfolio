<template>
  <div class="pagebutton">
    <a :href="blok.link && blok.link.story ? blok.link.story.url : '#'" class="mx-6 bg-blend-darken bg-gray-100 p-2 rounded-lg">{{ blok.buttontext }}</a>
  </div>
</template>

<script setup lang="ts">
import type { SbComponent } from "../types/sb-component";

// Definition des Link-Interfaces
interface Link {
  story?: {
    url: string;
  };
}

// Erweiterung des SbComponent-Interfaces
interface Otherpagebutton extends SbComponent {
  link?: Link;
  buttontext: string;
}

// Props Definition
const props = defineProps<{ blok: Otherpagebutton }>();

</script>

<style scoped>
.pagebutton {
  margin-top: -24px;
}
a:hover {
  background-color: #71792c;
  color: white;
}
</style>
