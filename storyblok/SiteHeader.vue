<template>
<div class="container  mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center">

<div class="text-4xl text-[#000000] font-bold text-start"><p>Simone Aigner</p></div>

  <div>Navbar</div>

  <div>Mode</div>

<!--  <StoryblokComponent-->
<!--      v-for="blok in blok.navbar"-->
<!--      :key="blok._uid"-->
<!--      :blok="blok"/>-->


</div>
</template>

<script setup>
defineProps({ blok: Object })
</script>