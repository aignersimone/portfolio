<template>
  <div class="py-4 mx-6 flex flex-wrap justify-center items-center md:justify-between my-3">
    <div class="text-3xl font-bold">Simone Aigner</div>

    <div class="text-center md:text-right grid grid-cols-3 gap-4 md:gap-6 items-center">
      <MainNavigationItem
          v-for="item in $globalSettings.navbar"
          :key="item._uid"
          :nav-item="item"
      ></MainNavigationItem>
    </div>
  </div>
</template>

<style scoped>

</style>


<script setup>
defineProps({ blok: Object });
</script>