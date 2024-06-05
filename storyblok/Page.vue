<template>
  <SiteHeader class="p-6"></SiteHeader>
  <div v-editable="blok" >
    <StoryblokComponent class="px-8" v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
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
