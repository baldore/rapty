<template>
  <div class="container">
    <navigation-bar />
    <h1 class="headline">Rapty</h1>
    <h2 class="text-base">Lo que quiera pedir rapidamente.</h2>
    <input type="text" v-model="input" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const x = 3

export default Vue.extend({

  data() {
    return {
      input: '',
    }
  },
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  @apply p-2 bg-gray-200 h-screen min-w-full;
}

.headline {
  @apply mb-1 text-2xl font-bold;
}
</style>
