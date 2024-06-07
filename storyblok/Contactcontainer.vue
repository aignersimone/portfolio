<template>
  <div class="cardcontainer mx-6 pb-6 flex justify-start items-center flex-wrap gap-3" >
    <StoryblokComponent
        v-for="blok in blok.contact"
        :key="blok._uid"
        :blok="blok"
    />
  </div>
</template>

<style scoped>
.cardcontainer{
  margin-top: -36px;
}
</style>

<script setup>
defineProps({ blok: Object })
</script>