<template>
  <
    <div v-editable="blok" class="mb-5 bg-gray-300 pt-5 flex flex-wrap items-center justify-center">

      <div class="lg:w-1/2 flex justify-center">
        <img :src="blok.image.filename" class="portraitimage" alt="Portrait"/>
      </div>
      <div class="lg:w-1/2 flex justify-start">
        <div>
          <h2 class="teaser text-2xl md:text-5xl align-baseline tracking-widest typed-text">{{blok.teaser}}</h2>
          <p class="teaser  align-baseline pt-4 tracking-widest typed-text">{{blok.shortinfo}} </p>
        </div>
      </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
.teaser{
  color:White;
  margin-left: -200px;
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
  animation: typing 3s steps(30, end); /* Geschwindigkeit der Animation und Anzahl der Schritte (Buchstaben) */
}

</style>