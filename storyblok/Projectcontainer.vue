<template>
  <div
      v-editable="blok" class=" pb-5 flex justify-center items-center flex-wrap" >

    <StoryblokComponent
        v-for="blok in blok.projects"
        :key="blok._uid"
        :blok="blok"
    />
  </div>
</template>

<style>

</style>

<script setup>
defineProps({ blok: Object })
</script>