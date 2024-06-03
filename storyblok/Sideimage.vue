<template>
  <img :src="blok.image.filename" alt="Portrait" class="pb-20 opacity-50 max-h-96"/>
</template>

<script setup>
defineProps({ blok: Object })
</script>