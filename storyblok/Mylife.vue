
  <template>
    <div
        v-editable="blok"
        class="my-2 text-[#000000]"
    >
      <tr>
        <td class="pe-4 td-emoji"> {{ blok.emojis }}</td>
        <td class="pe-4 td-duration">{{ blok.duration}}</td>
        <td class="td-infotext">{{ blok.infotext}}</td>
      </tr>
    </div>
  </template>

  <script setup>
    defineProps({ blok: Object })
  </script>

  <style scoped>
  .td-emoji {
    width: 80px;
  }

  .td-duration {
    width: 140px;
  }

  .td-infotext {
    max-width: 1200px;
  }
  </style>