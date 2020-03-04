<template>
  <div id="app">
    <sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap');
* {
  box-sizing: border-box;
}
body {
  background: #E5E5E5;
}
#app {
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  background: #F4F6F8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.button {
  font-family: 'Lato', sans-serif;
  border: 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
}
</style>
