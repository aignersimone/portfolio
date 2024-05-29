<template>
  <div
    v-editable="blok"
    class="py-20 text-6xl text-[#000000] font-bold text-center"
  >
    {{ blok.headline }}
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
