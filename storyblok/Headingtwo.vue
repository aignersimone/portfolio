<template>
  <div
      v-editable="blok"
      class="mx-6 py-2 text-3xl text-[#000000] font-bold text-start"
  >
    {{ blok.heading }}
  </div>
</template>


<script setup>
defineProps({ blok: Object })
</script>