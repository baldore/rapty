<template>
  <div class="main-content">
    <div class="container">Home</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const input = ref('hola mundo')

    return { input }
  },
})
</script>

