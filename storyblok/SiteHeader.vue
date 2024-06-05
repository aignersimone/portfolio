<template>
<div class="container  mx-auto grid md:grid-cols-2 gap-12 my-12">

  <div class="text-3xl text-[#000000] font-bold text-start"><p>Simone Aigner</p></div>

    <div class="text-end">Navbar
  <!--    <MainNavItem-->
  <!--      v-for="blok in blok.$globalSettings.navbar"-->
  <!--      :key="blok._uid"-->
  <!--      :blok="blok"-->
  <!--      :link="blok.link"/>-->
    </div>



</div>
</template>

<style scoped>
 .container{
   max-width: 900px;
 }
</style>

<script setup>
defineProps({ blok: Object })
</script>
