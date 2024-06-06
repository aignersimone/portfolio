<template>
  <div   v-editable="blok"  class="my-3 text-2xl sm:text-5xl text-[#000000] font-bold text-center typed-text-container"  >
    <h1 class="tracking-widest typed-text">{{ blok.headline }}</h1>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
/* CSS-Styling für die animierte Schrift */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typed-text-container {
  display: flex;
  justify-content: center;
}

.typed-text {
  overflow: hidden;
  white-space: nowrap;
  animation: typing 3s steps(30, end); /* Geschwindigkeit der Animation und Anzahl der Schritte (Buchstaben) */
}
</style>
