<template>
  <div>
    <navigation-bar />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, Blin4kMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.main-content {
  @apply bg-gray-200 h-screen min-w-full;
  padding-top: 60px;
}

.container {
  @apply px-6 py-4 max-w-3xl mx-auto;
}

.btn {
  @apply bg-gray-700 p-2 rounded-sm text-white px-4;
}
.btn:hover {
  @apply bg-gray-900;
}
</style>
