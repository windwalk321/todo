<template>
  <div class="home">
    <ul v-if="folders" class="home__folders">
      <folder-item
        v-for="folder in folders"
        :key="folder.id"
        :folder="folder"
      />
    </ul>
    <h4 class="home__title">Задачи отсутствуют</h4>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import FolderItem from '../components/FolderItem'

export default {
  name: 'Home',
  components: {
    FolderItem
  },
  computed: {
    ...mapState(['folders', 'todos'])
  }
}
</script>

<style lang="scss" scoped>
.home {
  background: #ffffff;
  width: 100%;
  position: relative;
  &__title {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 350px;
    top: 50%;
    left: 50%;
    font-size: 32px;
    font-weight: bold;
    color: #C9D1D3;
  }
}
</style>
