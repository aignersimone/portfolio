<template>
  <div class="container">
  <div
      v-editable="blok"
      class="grid my-6">
    <StoryblokComponent
        v-for="blok in blok.rows"
        :key="blok._uid"
        :blok="blok"
    ></StoryblokComponent>
  </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.container{
  max-width: 900px;
  display: flex;
  margin: 0 auto;

}

</style>
