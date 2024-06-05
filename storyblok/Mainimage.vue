<template>
  <img :src="blok.image.filename" alt="Portrait" class=""/>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
img{
  max-height: 350px;
}
</style>