<template>
  <div
      v-editable="blok"
      class="grid m-12 py-5"  >
    <StoryblokComponent
        v-for="blok in blok.rows"
        :key="blok._uid"
        :blok="blok"
    ></StoryblokComponent>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>