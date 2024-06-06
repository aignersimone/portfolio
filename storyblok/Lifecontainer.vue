<template>
  <div class="mx-6 bg">
    <div
        v-editable="blok"
        class="grid my-4">
      <StoryblokComponent
          v-for="blok in blok.lifesteps"
          :key="blok._uid"
          :blok="blok"
      ></StoryblokComponent>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>