

<template>
  <div class="maindiv py-4 mx-6 flex flex-wrap justify-center items-center sm:justify-between my-3">
    <div class="text-3xl font-bold">Simone Aigner</div>

    <div class="text-center md:text-right mt-4 md:mt-0 grid grid-cols-3 gap-6 items-center">
      <MainNavigationItem
          v-for="item in $globalSettings.navbar"
          :key="item._uid"
          :nav-item="item"
      ></MainNavigationItem>
    </div>
  </div>
</template>

<style scoped>
/*.maindiv{*/
/*  margin-left: 100px;*/
/*  margin-right: 100px;*/
/*}*/

</style>


<script setup>
defineProps({ blok: Object });
</script>