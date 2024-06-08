<template>
    <div
        v-editable="blok"
        class="my-2 text-[#000000]"
    >
      <tr class="flex flex-wrap">
        <td class="pe-4 td-emoji"> {{ blok.emojis }}</td>
        <td class="pe-4 td-duration">{{ blok.duration}}</td>
        <td class="td-infotext">{{ blok.infotext}}</td>
      </tr>
    </div>
</template>

<script setup lang="ts">
import type {SbComponent} from "../types/sb-component";

interface Mylife extends SbComponent{
  emojis: string;
  duration: string;
  infotext: string;
}

defineProps<{ blok: Mylife }>();
</script>

<style scoped>
  .td-emoji {
    width: 85px;
  }

  .td-duration {
    width: 145px;
  }

  .td-infotext {
    max-width: 1200px;
  }
</style>