<template>
  <div
      class="skillcard bg-gray-800 text-white p-5 rounded-lg shadow-lg flex flex-col items-start text-left max-w-xs m-5">
    <div class="w-full flex justify-center mb-5">
      <img :src="blok.icon.filename" class="icon w-12">
    </div>
    <h3 class="relative mb-3 text-xl">
      <span class="highlight">{{ blok.heading }}</span>
    </h3>
    <p class="text-gray-400 text-base leading-relaxed">{{ blok.skills }}</p>
  </div>
</template>

<script setup>
defineProps({blok: Object})
</script>

<style scoped>
.skillcard{
  height: 320px;
  transition: transform 1.5s;
}

.skillcard:hover {
  transform: scale(1.1);
}

.icon{
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
