<template>
  <div  class="flex justify-center grid grid-rows-2 mx-6 my-6">
    <div class="italic text-center text-lg">{{blok.zitat}}</div>
    <div class="text-center">{{ blok.author }}</div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>