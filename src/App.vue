<template>
  <div id="app">
    <AppLayout>
      <slot />
    </AppLayout>
  </div>
</template>
<script>
import AppLayout from '@/layouts/AppLayout.vue'

export default {
  name: "App",
  components: {
    AppLayout
  }
}
</script>