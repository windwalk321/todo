<template>
  <div id="app" class="app">
    <app-sidebar />
    <router-view />
  </div>
</template>

<script>
import AppSidebar from './components/AppSidebar'

export default {
  name: 'app',

  components: {
    AppSidebar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');

* {
  box-sizing: border-box;
}

html {
  width: 100vw;
  overflow-x: hidden;
}

body {
  background: #E5E5E5;
}

.app {
  font-family: 'Roboto', sans-serif;
  margin: 0 auto;
  background: #F4F6F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  min-height: 500px;
  width: 800px;
}

.button {
  font-family: 'Lato', sans-serif;
  border: 0;
  outline: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
}
</style>
