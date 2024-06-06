<template>
  <div
      v-editable="blok"
      class="blocktext text-lg text-start mx-6 mb-6"  >
    {{ blok.text }}
  </div>
</template>


<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.blocktext{
  text-align: justify;
}
</style>



