<template>
  <div
      v-editable="blok"
      class="blocktext text-lg text-start mx-6 mb-6">
    <a :href="blok.link.url" class="mb-6"> {{ blok.teaser }} </a>
  </div>
</template>


<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Link {
  story?: {
    url: string;
  };
}

interface Extlink extends SbComponent{
  link: Link;
  teaser: string;
}

defineProps<{ blok: Extlink }>();
</script>

<style scoped>
.blocktext{
  text-align: justify;
}

a{
  color: #71792c;
}
</style>



