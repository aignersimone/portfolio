<template>
  <a :href="blok.link.url">
    <div class="w-full flex justify-start">
      <img :src="blok.icon.filename" class="image ">
    </div>
  </a>
</template>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Link {
  story?: {
    url: string;
  };
}
interface Contact extends SbComponent{
  link: Link;
  filename: string;
}
defineProps<{ blok: Contact }>();
</script>

<style scoped>
img{
  width: 50px;
}
</style>