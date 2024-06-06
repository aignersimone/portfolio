<template>
  <div
    v-editable="blok" class="grid md:grid-cols-3 my-6 place-items-center bg-[#000000] py-5 " >

    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<style>
.container{
  max-width: 900px;
}
</style>

<script setup>
defineProps({ blok: Object })
</script>
