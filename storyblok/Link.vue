<template>
  <div
      v-editable="blok"
      class="blocktext text-lg text-start mx-6 mb-6"  >
    {{ blok.teaser }}
  </div>
</template>


<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Link extends SbComponent{
  teaser: string;
}

defineProps<{ blok: Link }>();
</script>

<style scoped>
.blocktext{
  text-align: justify;
}
</style>



