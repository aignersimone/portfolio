<template>
  <a :href="blok.link.url">
    <div class="w-full flex justify-start">

      <img :src="blok.icon.filename" class="image ">


    </div>
  </a>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
img{
  width: 50px;
}
</style>