<template>
  <div class="nav">
    <div class="container nav-container">
      <n-link class="font-bold" to="/">Rapty</n-link>
      <div>
        <n-link class="btn btn-green" to="/signup">Sign Up</n-link>
        <n-link class="btn btn-green" to="/login">Login</n-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: String as PropType<string>,
  },

  setup(props) {
    console.log(props.title)
  },
})
</script>

<style scoped>
.nav {
  @apply bg-gray-300 border-b border-gray-400 absolute w-full;
}

.nav-container {
  @apply flex justify-between;
}

.headline {
  @apply mb-1 text-2xl font-bold;
}

.btn-green {
  @apply bg-green-500;
  transition: background-color 0.2s;
}
.btn-green:hover {
  @apply bg-green-800;
}
</style>
