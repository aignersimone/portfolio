<template>
  <div
      class="projectcard bg-blend-darken bg-gray-100 p-5 rounded-lg shadow-lg flex flex-col items-start text-left max-w-sm m-5">
    <a :href="blok.link.url">
    <div class="w-full flex justify-center">

        <img :src="blok.image.filename" class="image ">


    </div>
    <h3 class="relative mb-3 text-xl">
      <span class="highlight">{{ blok.heading }}</span>
    </h3>
    <p class="text-gray-600 text-base leading-relaxed">{{ blok.description }}</p>
    </a>
  </div>

</template>

<script setup>
defineProps({blok: Object})
</script>

<style scoped>
.projectcard{
  transition: transform 1.5s;
}

.projectcard:hover {
  transform: scale(1.1);
}

.image{
  height: 250px;
}

.highlight::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px; /* Adjust position if needed */
  width: 100%;
  height: 5px; /* Adjust height if needed */
  background-color: #71792C; /* Pink color for underline */
}

h3{
  color: black;
}
</style>
