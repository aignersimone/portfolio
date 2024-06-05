<template>
  <div
    v-editable="blok"
    class="my-12 text-6xl text-[#000000] font-bold text-center"
  >
    <h1 class="tracking-widest">{{ blok.headline }}</h1>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

