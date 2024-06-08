<template>
  <div v-editable="blok" class="mt-6 bg-[#000000] py-5 flex justify-center items-center gap-6 flex-wrap">
    <img :src="blok.leftimage.filename" alt="Portrait" class="opacity-70 sideimage hidden md:block"/>
    <img :src="blok.middleimage.filename" alt="Portrait" class="my-4 mainimage"/>
    <img :src="blok.rightimage.filename" alt="Portrait" class="opacity-70 sideimage hidden sm:block"/>
  </div>
</template>

<style>
  .sideimage{
    max-height: 250px;
  }
  .mainimage{
    max-height: 350px;
  }
</style>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Imageheader extends SbComponent{
  leftimage: string;
  middleimage: string;
  rightimage: string;
}

defineProps<{ blok: Imageheader }>();
</script>
