<template>
  <div
      v-editable="blok" class="grid md:grid-cols-3 my-6 bg-[#000000] py-5 justify-end place-items-center" >
      <div class="place-items-end">
        <img :src="blok.leftimage.filename" alt="Portrait" class="opacity-50 sideimage justify-self-end"/>
      </div>
    <div class="text-center">
      <img :src="blok.middleimage.filename" alt="Portrait" class="my-4 mainimage"/>
    </div>
    <div class="text-start">
      <img :src="blok.rightimage.filename" alt="Portrait" class="opacity-50 sideimage"/>
    </div>

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
