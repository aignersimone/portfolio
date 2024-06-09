<template>
  <div
      v-editable="blok"
      class="blocktext text-lg text-start mx-6 mb-1 flex flex-wrap"  >
    <p><b>{{ blok.iconname }}:</b></p>
    <p>{{blok.iconref}}</p>
  </div>
</template>


<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Iconref extends SbComponent{
  iconname: string;
  iconref: string;
}

defineProps<{ blok: Iconref }>();
</script>

<style scoped>
.blocktext{
  text-align: justify;
}

p{
  word-break: break-word;
}
</style>



