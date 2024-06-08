<template>
  <div
      v-editable="blok"
      class="blocktext text-lg text-start mx-6 mb-6"  >
    {{ blok.text }}
  </div>
</template>


<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Simpletext extends SbComponent{
  text: string;
}

defineProps<{ blok: Simpletext }>();
</script>

<style scoped>
.blocktext{
  text-align: justify;
}
</style>



