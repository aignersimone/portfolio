<template>
  <a :href="blok.link && blok.link.story ? blok.link.story.url: '#'"  class="mx-6 bg-blend-darken bg-gray-100 p-2 rounded-lg">{{blok.buttontext}}</a>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>

a:hover{
  background-color: #71792C;
  color: white;
}
</style>