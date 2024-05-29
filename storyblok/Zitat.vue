<template>
  <div  class="flex justify-center grid grid-rows-2">
    <div class="italic text-center">{{blok.zitat}}</div>
    <div class="text-center">{{blok.author}}</div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>