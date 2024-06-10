<template>
    <div v-editable="blok" class="mb-5 bg-gray-300 pt-5 flex flex-wrap items-center justify-center">
      <div class=" imagediv lg:w-1/2 flex justify-start lg:justify-center">
        <img :src="blok.image.filename" class="portraitimage" alt="Portrait"/>
      </div>
      <div class="lg:w-1/2 flex justify-start">
        <div class="">
          <h2 class="teaser text-2xl md:text-5xl align-baseline tracking-widest typed-teaser md:pl-0 mt-2">{{blok.teaser}}</h2>
          <p class="teaser text-base align-baseline pt-4 tracking-widest typed-text pl-0 mb-2">{{blok.shortinfo}} </p>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Header extends SbComponent{
  image: string;
  teaser: string;
  shortinfo: string;
}

defineProps<{ blok: Header }>();
</script>

<style scoped>
.teaser{
  color:White;
  /*margin-left: -200px;*/
  word-wrap: break-word;
}

.imagediv{
  margin-right: -200px;
}

@media (max-width: 1050px) {
  .teaser {
    margin-left: 0;
    margin-top: 10px;
    text-align: center;
    padding-top: 0;
    padding-bottom: 10px;
    word-wrap: break-word;
  }

  .imagediv{
    margin-right: 0;
  }
}

.portraitimage{
  max-height: 400px;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typed-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(40, end);
}

.typed-teaser {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(40, end);
}

</style>