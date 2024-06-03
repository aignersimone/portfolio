<template>
<div class="container  mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center">

<div class="text-4xl text-[#000000] font-bold text-start"><p>Simone Aigner</p></div>

  <div>Navbar
<!--    <StoryblokComponent-->
<!--      v-for="blok in blok.$globalSettings.navbar"-->
<!--      :key="blok._uid"-->
<!--      :blok="blok"-->
<!--      :link="blok.link"/>-->
  </div>

  <div>Mode</div>


</div>
</template>

<script setup>

defineProps({ blok: Object })
</script>