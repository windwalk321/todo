<template>
  <div id="app" class="app">
    <index />
  </div>
</template>

<script>
import Index from './views/Index.vue'

export default {
  name: 'app',
  components: {
    Index
  }
}
</script>

<style lang="scss">
@import "./assets/styles/basics/_base.scss";
</style>
