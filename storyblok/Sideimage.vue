<template>
  <img :src="blok.image.filename" alt="Portrait" class="opacity-50"/>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
 img{
   max-height: 250px;
 }
</style>