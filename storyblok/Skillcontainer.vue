<template>
  <div
      v-editable="blok" class="my-6 bg-[#000000] py-5 flex justify-center items-center flex-wrap" >

    <StoryblokComponent
        v-for="blok in blok.skills"
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