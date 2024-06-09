<template>
  <div class="py-4 mx-6 flex flex-wrap justify-center items-center md:justify-between my-3 gap-2 sm:gap-6">
    <div class="text-3xl font-bold">SIMONE AIGNER</div>

    <div class="text-center sm:text-1xl sm:text-right flex gap-4 md:gap-6 items-center">
      <MainNavigationItem
          v-for="item in $globalSettings.navbar"
          :key="item._uid"
          :nav-item="item"
          class="flex-shrink-0"
      ></MainNavigationItem>
    </div>
  </div>
</template>


<style scoped>


</style>

<script setup>
defineProps({ blok: Object });
</script>