<template>
  <a :href="navItem.link.cached_url" class="navitem text-1xl md:text-2xl"> {{ navItem.label }} </a>
</template>

<script setup>
defineProps({ navItem: Object });
</script>

<style scoped>
.navitem{
  text-transform: uppercase;
}

.navitem:hover{
  color: #71792C;
}
</style>