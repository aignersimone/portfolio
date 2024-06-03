<template>
  <img :src="blok.image.filename" alt="Portrait"/>
</template>

<script setup>
defineProps({ blok: Object })
</script>5