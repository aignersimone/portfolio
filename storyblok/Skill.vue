<template>
  <div
      class="projectcard bg-blend-darken bg-gray-100 p-5 rounded-lg shadow-lg flex flex-col items-start text-left max-w-xs m-5">
    <div class="w-full flex justify-center mb-5">
      <img :src="blok.icon.filename" class="image w-12">
    </div>
    <h3 class="relative mb-3 text-xl">
      <span class="highlight">{{ blok.heading }}</span>
    </h3>
    <p class="text-gray-600 text-base leading-relaxed">{{ blok.skills }}</p>
  </div>
</template>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Skill extends SbComponent{
  filename: string;
  heading: string;
  skills: string;
}

defineProps<{ blok: Skill }>();
</script>

<style scoped>
.projectcard{
  height: 320px;
  transition: transform 1.5s;
}

.projectcard:hover {
  transform: scale(1.1);
}

.image{
  width: 40px;
}
.highlight::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px; /* Adjust position if needed */
  width: 100%;
  height: 5px; /* Adjust height if needed */
  background-color: #71792C; /* Pink color for underline */
}
</style>
