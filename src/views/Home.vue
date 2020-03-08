<template>
  <div class="home">
    <ul class="home__folders">
      <folder
        v-for="folder in folders"
        :key="folder.id"
        :folder="folder"
      />
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Folder from '../components/Folder'

export default {
  name: 'Home',
  components: {
    Folder
  },
  computed: {
    ...mapState(['folders', 'todos'])
  }
}
</script>

<style lang="scss">
.home {
  background: #ffffff;
  width: 100%;
}
</style>
