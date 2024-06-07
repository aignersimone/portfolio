<template>

    <div v-editable="blok" class="mb-5 bg-gray-300 pt-5 flex flex-wrap items-center justify-center">

      <div class="lg:w-1/2 flex justify-start lg:justify-center">
        <img :src="blok.image.filename" class="portraitimage" alt="Portrait"/>
      </div>
      <div class="lg:w-1/2 flex justify-start">
        <div class="">
          <h2 class="teaser sm:text-2xl md:text-5xl align-baseline tracking-widest typed-text md:pl-0">{{blok.teaser}}</h2>
          <p class="teaser text-base align-baseline pt-4 tracking-widest typed-text pl-0">{{blok.shortinfo}} </p>
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
  word-wrap: break-word;
}
@media (max-width: 1050px) {
  .teaser {
    margin-left: 0; /* Padding entfernen für Bildschirme kleiner als lg */
    margin-top: 10px;
    text-align: center;
    padding-top: 0;
    padding-bottom: 10px;
    word-wrap: break-word;
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
  animation: typing 3s steps(30, end); /* Geschwindigkeit der Animation und Anzahl der Schritte (Buchstaben) */
}

</style>