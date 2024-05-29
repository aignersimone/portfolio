<template>
  <div
      v-editable="blok"
      class="py-2 text-start"
  >
    {{ blok.text }}
  </div>
</template>


<script setup>
defineProps({ blok: Object })
</script>