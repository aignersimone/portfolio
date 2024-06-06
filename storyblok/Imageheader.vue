<template>
  <div v-editable="blok" class="my-6 bg-[#000000] py-5 flex justify-center items-center gap-6 flex-wrap">

    <img :src="blok.leftimage.filename" alt="Portrait" class="opacity-50 sideimage"/>
    <img :src="blok.middleimage.filename" alt="Portrait" class="my-4 mainimage"/>
    <img :src="blok.rightimage.filename" alt="Portrait" class="opacity-50 sideimage"/>

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

<script setup>
defineProps({ blok: Object })
</script>
