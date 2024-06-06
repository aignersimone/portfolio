<template>
  <SiteHeader></SiteHeader>
  <div v-editable="blok">
    <StoryblokComponent  v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
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
