<template>
  <SiteHeader></SiteHeader>
  <div v-editable="blok">
    <StoryblokComponent  v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
  <div class="flex justify-center items-center mb-6">
    <p class="text-gray-600 text-center"> Copyright © Simone Aigner | Made with Storyblok</p>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
<style >
div {
  font-family: "Space Mono", monospace;
}

</style>
